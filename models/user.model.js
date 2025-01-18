const db = require('../database/connection')
const bcrypt = require('bcrypt')

module.exports = class UserModel {
    static async getValidUser(username, password) {
        try {
            // Bungkus db.get dalam Promise
            const row = await new Promise((resolve, reject) => {
                db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
                    if (err) return reject(err);
                    resolve(row);
                });
            });

            if (!row) {
                console.log('User tidak ditemukan.');
                return null;
            }

            const isMatch = await bcrypt.compare(password, row.password);
            if (isMatch) {
                return row; // User valid
            } else {
                console.log('Password salah.');
                return null; // Password salah
            }
        } catch (error) {
            console.error('Error saat mencari user:', error.message);
            throw error; // Lempar error ke caller
        }
    }

}