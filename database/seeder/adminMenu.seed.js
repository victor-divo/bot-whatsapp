const db = require('../connection')
const bcrypt = require('bcrypt')

const menu = 'roomAvailibility'
const menu_text = 'Cek Ketersediaan Kamar'
const value = '2'
const content = 'Kamar tersedia saat ini : '

db.run(`INSERT INTO admin_menus (menu, menu_text, value, content) VALUES (?, ?, ?, ?)`, [menu, menu_text, value, content], function (err) {
    if (err) {
        console.error('Error saat insert data:', err.message);
    } else {
        console.log(`Data berhasil dimasukkan dengan ID: ${this.lastID}`);
    }
});