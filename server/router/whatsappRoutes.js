// routes/whatsappRoutes.js
const express = require("express");
const router = express.Router();
const { sendWhatsAppMessage } = require("../Controller/whatsappController");

router.post("/send-whatsapp", sendWhatsAppMessage);

module.exports = router;
