const QRCode = require('qrcode');
const fs = require('fs').promises;
const path = require('path');

const url = 'https://developer.vialabs.io';

async function generateQR() {
  try {
    const qrDataUrl = await QRCode.toDataURL(url, {
      width: 400,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });
    
    // Convert data URL to buffer
    const base64Data = qrDataUrl.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Save to static directory
    await fs.writeFile('static/img/docs-qr.png', buffer);
    console.log('QR code generated successfully!');
  } catch (err) {
    console.error('Failed to generate QR code:', err);
  }
}

generateQR();
