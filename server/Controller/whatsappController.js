// controllers/whatsappController.js
const client = require("../models/Twilioclient");

// Twilio sandbox & recipient
const FROM_NUMBER = "whatsapp:+14155238886"; // Twilio Sandbox number
const TO_NUMBER = "whatsapp:+916383431936";  // Your verified number

const sendWhatsAppMessage = async (req, res) => {
  const { name, email, phone, message } = req.body;
  const now = new Date().toLocaleString("en-IN");

  const fullMessage = `📩 New Client Message:
🕒 ${now}
👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
📝 Message: ${message}`;

  try {
    await client.messages.create({
      from: FROM_NUMBER,
      to: TO_NUMBER,
      body: fullMessage,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("❌ WhatsApp Send Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  sendWhatsAppMessage,
};
