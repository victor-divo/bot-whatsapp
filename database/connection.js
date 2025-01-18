const sqlite3 = require('sqlite3').verbose();

// Membuat koneksi ke database SQLite
const db = new sqlite3.Database('./data.sqlite', (err) => {
    if (err) {
        console.error('Error membuka database:', err.message);
    } else {
        console.log('Terhubung ke database SQLite.');
    }
});

module.exports = db;