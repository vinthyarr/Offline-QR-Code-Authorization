// App.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';
import backgroundImage from 'D:/VIT/Winter 23-24/CNS/Project/qr-code-author/src/images/background.jpg'; // Import background image

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [selectedShopType, setSelectedShopType] = useState(null);
  const [selectedShop, setSelectedShop] = useState(null);
  const [qrCodePath, setQRCodePath] = useState('');

  const handleSendOTP = () => {
    // Simulate sending OTP
    // You can replace this with actual OTP generation logic
    setOtpVerified(true);
  };

  const handleVerifyOTP = () => {
    // Simulate OTP verification
    // You can replace this with actual OTP verification logic
    if (verificationCode === '123456') {
      alert('OTP verified successfully');
      setOtpVerified(true);
    } else {
      alert('Invalid OTP');
    }
  };

  const handleShopTypeClick = (shopType) => {
    setSelectedShopType(shopType);
    setSelectedShop(null); // Reset selected shop when changing shop type
  };

  const handleShopClick = (shop) => {
    setSelectedShop(shop);
  };

  const handleScanQRCode = () => {
    // Set the QR code image path based on the selected shop
    let qrCodePath;
    switch (selectedShop) {
      case 'Dakshin':
        qrCodePath = 'path1';
        break;
      case 'Lassi House':
        qrCodePath = 'path2';
        break;
      case 'Healthy & Tasty':
        qrCodePath = 'path3';
        break;
      case 'Chat Corner':
        qrCodePath = 'path4';
        break;
      case 'Georgia':
        qrCodePath = 'path5';
        break;
      case 'Food Truck':
        qrCodePath = 'path6';
        break;
      case 'Restaurant':
        qrCodePath = 'path7';
        break;
      case 'Tea Tier':
        qrCodePath = 'path8';
        break;
      case 'Dominos':
        qrCodePath = 'path9';
        break;
      default:
        qrCodePath = '';
    }
    setQRCodePath(qrCodePath);
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        {!otpVerified ? (
          <div className="otp-verification">
            <h1>OTP Verification</h1>
            <input type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <button className="animated-button" onClick={handleSendOTP}>Send OTP</button>
            <br />
            <input type="text" placeholder="Enter OTP" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
            <button className="animated-button" onClick={handleVerifyOTP}>Verify OTP</button>
          </div>
        ) : (
          <div className="shops">
            <h1>Food Outlets in VIT Chennai</h1>
            <div className="shop-types">
              <ul>
                <li onClick={() => handleShopTypeClick('Gazebo')}>Gazebo</li>
                <li onClick={() => handleShopTypeClick('North Square')}>North Square</li>
                <li onClick={() => handleShopTypeClick('Gymkhana')}>Gymkhana</li>
              </ul>
            </div>
            {selectedShopType && (
              <div className="shop-list">
                <h2>{selectedShopType}</h2>
                <ul>
                  {selectedShopType === 'Gazebo' && (
                    <>
                      <li onClick={() => handleShopClick('Dakshin')}>Dakshin</li>
                      <li onClick={() => handleShopClick('Lassi House')}>Lassi House</li>
                      <li onClick={() => handleShopClick('Healthy & Tasty')}>Healthy & Tasty</li>
                    </>
                  )}
                  {selectedShopType === 'North Square' && (
                    <>
                      <li onClick={() => handleShopClick('Chat Corner')}>Chat Corner</li>
                      <li onClick={() => handleShopClick('Georgia')}>Georgia</li>
                      <li onClick={() => handleShopClick('Food Truck')}>Food Truck</li>
                    </>
                  )}
                  {selectedShopType === 'Gymkhana' && (
                    <>
                      <li onClick={() => handleShopClick('Restaurant')}>Restaurant</li>
                      <li onClick={() => handleShopClick('Tea Tier')}>Tea Tier</li>
                      <li onClick={() => handleShopClick('Dominos')}>Dominos</li>
                    </>
                  )}
                </ul>
              </div>
            )}
            {selectedShop && (
              <div className="qr-code">
                <h2>Selected Shop: {selectedShop}</h2>
                <button className="animated-button" onClick={handleScanQRCode}>Scan QR Code</button>
                {qrCodePath && <QRCode value={qrCodePath} />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
