function generateQRCode(url) {
    const QRCode = require('qrcode');

    return QRCode.toDataURL(url)
        .then((qrCodeDataUrl) => {
            return qrCodeDataUrl;
        })
        .catch((err) => {
            console.error('Error generating QR code:', err);
            throw err;
        });
}

module.exports = generateQRCode;