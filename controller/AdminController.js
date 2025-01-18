const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");
const UserModel = require("../models/user.model");
const AdminMenuModel = require("../models/adminMenu.model");

module.exports = class AdminController extends Controller {
    async loginAdmin(request, username, password) {
        try {
            console.log(username, password)
            const user = await UserModel.getValidUser(username, password)

            if (!user) {
                console.log(user)
                return
            }

            console.log(user)
            console.log('menampikan menu')
            this.setState('authenticated')
            return await this.showMenu(request)
        } catch (error) {
            console.error(error)
            return
        }
    }


    async showMenu(request) {
        return this.reply(`
Selamat Datang Admin, Menu yang tersedia:

1. 🔄 Ubah Ketersidaan Kamar
Ubah ketersediaan kamar dengan perintah \`\`\`ubah-ketersediaan-kamar {sisaKamar}\`\`\`

2. 🚪 Log Out
Keluar dari akun admin dengan perintah \`\`\`logout-admin\`\`\`


Untuk menampilkan pesan ini silahkan ketik \`\`\`menu-admin\`\`\`
`.trim())
    }

    async changeRoomAvalibility(request, sisaKamar) {
        const roomAvailibilityMenu = await AdminMenuModel.changeValue('roomAvailibility', sisaKamar)
        return this.reply(`Ketersediaan kamar berhasil diubah menjadi ${sisaKamar}`.trim())
    }

    logout(request) {
        this.deleteState()
        return "Berhasil logout"
    }
}