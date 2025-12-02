// config/twilioClient.js
const twilio = require("twilio");

const accountSid = "AC33a20223e5e5742e2de90b23a0a9485e";
const authToken = "10c19f4a433ce53502c320d965a82633";

const client = twilio(accountSid, authToken);

module.exports = client;
