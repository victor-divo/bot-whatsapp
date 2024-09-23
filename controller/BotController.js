const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {


  async introduction(request) {
    return Response.menu.fromArrayOfString(
      [
        f("menu.kostLocation"),
        f("menu.roomType"),
        f("menu.contactPerson")
      ],
      f("intro", [request.name]),
      f("template.menu")
    );
  }

  async kostLocation(request) {
    return this.reply("Lokasi kost kami ada disini https://maps.app.goo.gl/MGJDNvVJPtSMet539")
  }

  async roomType(request) {
    return Response.text.fromString(`Beberapa Jenis Room kost
1. Tipe AAC: AC, kamar mandi dalam, listrik exclude
2. Tipe ABC: AC, kamar mandi luar, listrik include
3. Tipe BC: Non AC, kamar mandi luar, listrik include`)
  }

  async contactPerson(request) {
    return this.reply("Untuk kontak lebih lanjut silahkan hubungi nomor wa.me/+6285713798010")
  }

}