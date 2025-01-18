const db = require('../connection')

function createTable() {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error membuat tabel:', err.message);
        } else {
            console.log('Tabel berhasil dibuat.');
        }
    });
}

createTable()