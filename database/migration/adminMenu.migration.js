const db = require('../connection')

function createTable() {
    db.run(`CREATE TABLE IF NOT EXISTS admin_menus (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        menu TEXT NOT NULL,
        menu_text TEXT NOT NULL,
        value TEXT NOT NULL,
        content TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.error('Error membuat tabel:', err.message);
        } else {
            console.log('Tabel berhasil dibuat.');
        }
    });
}

createTable()