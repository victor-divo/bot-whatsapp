require('dotenv').config()
const Pepesan = require("pepesan");
const router = require("./router");
const { ALLOWED_NUMBERS, BROWSER_NAME } = process.env;

(async () => {
    const config = {
        allowedNumbers: ALLOWED_NUMBERS ? ALLOWED_NUMBERS.split(',') : null,
        browserName: BROWSER_NAME || 'BOT_WA'
    }
    const pepesan = Pepesan.init(router, config)
    await pepesan.connect()
})()