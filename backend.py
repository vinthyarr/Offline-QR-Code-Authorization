from flask import Flask, send_file
import os

app = Flask(__name__)

# Default OTP value for testing
default_otp = '123456'

@app.route('/verify-otp/<otp>', methods=['GET'])
def verify_otp(otp):
    # Verify OTP
    if otp == default_otp:
        return 'OTP verified successfully', 200
    else:
        return 'Invalid OTP', 400

@app.route('/path1')
def get_shop1_qr_code():
    qr_code_path = 'D:/VIT/Winter 23-24/CNS/Project/qr_codes/shop1.png'
    return send_file(qr_code_path, mimetype='image/png')

@app.route('/path2')
def get_shop2_qr_code():
    qr_code_path = 'D:/VIT/Winter 23-24/CNS/Project/qr_codes/shop2.png'
    return send_file(qr_code_path, mimetype='image/png')

@app.route('/path3')
def get_shop3_qr_code():
    qr_code_path = 'D:/VIT/Winter 23-24/CNS/Project/qr_codes/shop3.png'
    return send_file(qr_code_path, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)














