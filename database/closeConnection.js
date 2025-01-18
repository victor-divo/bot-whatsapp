const db = require('./connection'); // Mengimpor koneksi database

// Fungsi untuk menutup koneksi database
function closeConnection() {
    db.close((err) => {
        if (err) {
            console.error('Error menutup database:', err.message);
        } else {
            console.log('Koneksi database ditutup.');
        }
    });
}

// Mengekspor fungsi untuk digunakan di file lain
module.exports = closeConnection;
