const db = require('../connection')
const bcrypt = require('bcrypt')

const username = 'admin'
const password = 'rahasia'

const hashedPassword = bcrypt.hashSync(password, 10);
db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPassword], function (err) {
    if (err) {
        console.error('Error saat insert data:', err.message);
    } else {
        console.log(`Data berhasil dimasukkan dengan ID: ${this.lastID}`);
    }
});