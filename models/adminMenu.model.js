const db = require('../database/connection')
const bcrypt = require('bcrypt')

module.exports = class AdminMenuModel {
    static async getMenu(menu) {
        try {
            // Bungkus db.get dalam Promise
            const row = await new Promise((resolve, reject) => {
                db.get(`SELECT * FROM admin_menus WHERE menu = ?`, [menu], (err, row) => {
                    if (err) return reject(err);
                    resolve(row);
                });
            });

            if (!row) {
                console.log('Menu tidak ditemukan.');
                return null;
            }
            return row
        } catch (error) {
            console.error('Error saat mencari admin menu:', error.message);
            throw error; // Lempar error ke caller
        }
    }

    static async changeValue(menu, value) {
        try {
            // Bungkus db.get dalam Promise
            const result = await new Promise((resolve, reject) => {
                db.run(`UPDATE admin_menus SET value = ? WHERE menu = ?`, [value, menu], function (err) {
                    if (err) return reject(err);
                    resolve(this.changes); // Mengembalikan jumlah baris yang terpengaruh
                });
            });

            if (result > 0) {
                console.log("Update berhasil!");
            } else {
                console.log("Tidak ada baris yang diperbarui.");
            }
            return result
        } catch (error) {
            console.error('Error saat mencari admin menu:', error.message);
            throw error; // Lempar error ke caller
        }
    }

}