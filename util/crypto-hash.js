const crypto = require('crypto');
const hexToBinary = require('hex-to-binary');
//const { hasUncaughtExceptionCaptureCallback } = require('process');
const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');
    hash.update(inputs.map(input => JSON.stringify(input)).sort().join(' '));
    return hash.digest('hex');
};

module.exports = cryptoHash;