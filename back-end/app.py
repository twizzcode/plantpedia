import numpy as np
import pickle
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

# --- KONFIGURASI PENTING ---
MODEL_FILENAME = 'model_rekomendasi.pkl'
DATASET_FILENAME = 'Crop_recommendation.csv'

# 3. Threshold (Ambang Batas)
THRESHOLD_SANGAT_COCOK = 0.70 
THRESHOLD_CUKUP_COCOK = 0.30  

# 4. Mapping Nama Tanaman
CROP_NAME_MAPPING = {
    "Kopi": "coffee", "Jeruk": "orange", "Melon": "muskmelon",
    "Padi": "rice", "Semangka": "watermelon", "Jagung": "maize",
    "Pepaya": "papaya", "Pisang": "banana"
}
# ------------------------------

# --- Variabel Global untuk Model & Data ---
model_rf = None
ideal_crop_data = {}

def load_models_and_data():
    """Memuat semua model dan data saat aplikasi dimulai."""
    global model_rf, ideal_crop_data
    
    print("Mulai memuat model dan data...")
    
    # 1. Muat Model Random Forest (.pkl)
    try:
        with open(MODEL_FILENAME, 'rb') as file:
            model_rf = pickle.load(file)
        print(f"Berhasil memuat model RF dari '{MODEL_FILENAME}'")
    except Exception as e:
        print(f"ERROR: Gagal memuat model RF: {e}")

    # 2. Muat Data Ideal dari CSV
    try:
        df = pd.read_csv(DATASET_FILENAME)
        target_labels = list(CROP_NAME_MAPPING.values())
        df_filtered = df[df['label'].isin(target_labels)]
        df_ideal = df_filtered.groupby('label').mean(numeric_only=True)
        ideal_crop_data = df_ideal.to_dict('index')
        print(f"Berhasil memuat dan menghitung data ideal untuk {len(ideal_crop_data)} tanaman.")
    except Exception as e:
        print(f"ERROR: Gagal memuat data ideal dari CSV: {e}")
    
    print("Model dan data selesai dimuat.")

# Inisialisasi aplikasi Flask
app = Flask(__name__)

# Konfigurasi CORS untuk mengizinkan akses dari Vercel dan domain lainnya
CORS(app, resources={
    r"/*": {
        "origins": "*",  # Izinkan semua origin (untuk production, ganti dengan domain Vercel Anda)
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# === PANGGIL FUNGSI LOAD SAAT APLIKASI DIMULAI ===
load_models_and_data()
# =================================================

@app.route('/health', methods=['GET'])
def health_check():
    """Endpoint untuk health check - memastikan aplikasi berjalan dengan baik."""
    health_status = {
        'status': 'healthy',
        'model_loaded': model_rf is not None,
        'ideal_data_loaded': len(ideal_crop_data) > 0
    }
    
    # Jika ada komponen yang tidak siap, status menjadi unhealthy
    if not all([health_status['model_loaded'], health_status['ideal_data_loaded']]):
        health_status['status'] = 'unhealthy'
        return jsonify(health_status), 503
    
    return jsonify(health_status), 200

@app.route('/', methods=['GET'])
def home():
    """Endpoint root untuk menampilkan informasi API."""
    return jsonify({
        'service': 'Agriculture API',
        'version': '1.0',
        'endpoints': {
            'health': '/health',
            'validate_crop': '/validate_crop (POST)',
        },
        'status': 'running'
    }), 200

@app.route('/validate_crop', methods=['POST'])
def validate_crop():
    if model_rf is None or not ideal_crop_data:
        # Coba muat ulang jika belum siap
        load_models_and_data()
        if model_rf is None or not ideal_crop_data:
             return jsonify({'error': 'Sistem belum siap. Model atau data gagal dimuat. Cek log server.'}), 503
    try:
        data = request.json
        target_crop_display = data['target_crop']
        target_crop_internal = CROP_NAME_MAPPING.get(target_crop_display)
        
        if not target_crop_internal:
            return jsonify({'error': f'Tanaman "{target_crop_display}" tidak valid.'}), 400

        features_list = [
            float(data['n']), float(data['p']), float(data['k']),
            float(data['temperature']), float(data['humidity']),
            float(data['ph']), float(data['rainfall'])
        ]
        input_data_rf = np.array([features_list])
        
        all_probabilities = model_rf.predict_proba(input_data_rf)[0]
        prob_dict = dict(zip(model_rf.classes_, all_probabilities))
        crop_prob = prob_dict.get(target_crop_internal, 0.0)
        prob_percent = f"{crop_prob*100:.2f}%"

        if crop_prob >= THRESHOLD_SANGAT_COCOK: status = "Sangat Cocok"
        elif crop_prob >= THRESHOLD_CUKUP_COCOK: status = "Cukup Cocok"
        else: status = "Tidak Cocok"
        
        deskripsi_status = f"Model RF memprediksi lahan ini {status} untuk {target_crop_display}."

        return jsonify({
            "tanaman_target": target_crop_display,
            "status_kecocokan": status,
            "persentase_kecocokan": prob_percent,
            "deskripsi": deskripsi_status
        })

    except KeyError:
        return jsonify({'error': 'Data tidak lengkap. Pastikan 8 data (7 fitur + 1 target_crop) ada.'}), 400
    except Exception as e:
        print(f"ERROR: Terjadi kesalahan server: {str(e)}")
        return jsonify({'error': f'Terjadi kesalahan server: {str(e)}'}), 500

# Blok ini HANYA untuk development lokal, Gunicorn akan mengabaikannya
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
