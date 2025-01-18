const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");
const AdminMenuModel = require("../models/adminMenu.model");

module.exports = class BotController extends Controller {


  async introduction(request) {
    return Response.menu.fromArrayOfString(
      [
        f("menu.aboutUs"),
        f("menu.roomType"),
        f("menu.contactPerson"),
        f("menu.kostLocation"),
        f("menu.roomAvalibility"),
      ],
      f("intro", [request.name]),
      f("template.menu"),
      f("template.ending"),
    );
  }

  async kostLocation(request) {
    return this.reply("Lokasi kost kami ada disini https://maps.app.goo.gl/MGJDNvVJPtSMet539")
  }

  async roomType(request) {
    return [
      Response.image.fromURL(
        "https://img-ap-1.trovit.com/img1id/Z1q1q1N1N1d1t2/Z1q1q1N1N1d1t2.1_11.jpg",
      ),
      Response.image.fromURL(
        "https://static.mamikos.com/uploads/cache/data/style/2024-05-17/S57N0qP0-240x320.jpg",
        `
*Kamar Tipe 1 Standard Room*
Kamar tipe Standard cocok untuk mahasiswa atau pekerja dengan kebutuhan tempat tinggal yang nyaman dan terjangkau. Ruangan bersih, rapi, dan sudah dilengkapi dengan fasilitas dasar.

*Spesifikasi Kamar*
- Luas kamar: 3x3 meter
- Kasur ukuran single
- Meja belajar dan kursi
- Lemari pakaian
- Kipas angin
- Jendela dengan ventilasi udara

*Harga Kamar* Rp1.000.000 per bulan (termasuk listrik dan air)
`.trim()
      ),
      Response.image.fromURL(
        "https://www.kost-terdekat.com/pictures/1/kos-kosan-kost-menara-residence-tipe-deluxe-meruya-kembang-1670bz7d.jpeg",
      ),
      Response.image.fromURL(
        "https://www.kost-terdekat.com/pictures/1/kos-kosan-kost-menara-residence-tipe-deluxe-meruya-kembang-167nwpfv.jpeg",
        `
*Kamar Tipe 2 Deluxe Room*
Tipe Deluxe memberikan ruang yang lebih luas dan fasilitas tambahan untuk kenyamanan lebih. Ideal untuk penghuni yang menginginkan suasana eksklusif dan privasi lebih.

*Spesifikasi Kamar*
- Luas kamar: 4x4 meter
- Kasur ukuran queen
- AC (Air Conditioner)
- Meja kerja ergonomis dan kursi
- Lemari pakaian besar
- TV LED 32 inci
- Kamar mandi dalam dengan shower air panas

*Harga Kamar* Rp2.500.000 per bulan (termasuk listrik, air, dan WiFi)
`.trim()
      ),
    ]
  }

  async contactPerson(request) {
    return this.reply(`
Butuh Bantuan? Hubungi Kami!
Kami siap membantu Anda melalui nomor kontak berikut:

📞 Contact Person:
1️⃣ 0812-3456-7890
2️⃣ 0812-3456-7891
3️⃣ 0812-3456-7892

💬 Jangan ragu untuk menghubungi kami, tim kami siap melayani Anda dengan cepat dan ramah. 😊
`.trim())
  }

  async tipeSatu(request) {
    return [
      Response.image.fromURL(
        "https://fresh.suakaonline.com/wp-content/uploads/2017/04/1490486838098-1024x768.jpg",
        `Kamar kos 
        Muantap`.trim()
      ),
      'Kamar Kos \nBiasa'
    ]
  }

  async resetState(request) {
    await this.deleteState()
    return this.introduction(request)
  }

  async emptyMenu(request) {
    return this.reply("Maaf tidak ada kamar tipe itu")
  }

  async aboutUs(req) {

    return [
      Response.image.fromURL(
        "https://drive.google.com/uc?export=download&id=1467eZVds0axyH5GH7vM5RXIBgsvomHiP"
      ),
      'Akses Informasi lebih lanjut di https://linktr.ee/_elonimeloni_'
    ]
  }

  async roomAvalibility(req) {
    const roomAvailibilityMenu = await AdminMenuModel.getMenu('roomAvailibility')
    return this.reply(roomAvailibilityMenu.content + roomAvailibilityMenu.value)
  }
}