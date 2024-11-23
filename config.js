const fs = require('fs');

// Load environment variables if 'config.env' exists
if (fs.existsSync('config.env')) {
  require('dotenv').config({ path: './config.env' });
}

// Helper function to convert a string to a boolean (true if text matches the fault value)
const convertToBool = (text, fault = 'true') => text === fault;

// Default configuration values
const defaults = {
  SESSION_ID: "LdQg2YDb#z4Y8S860ZYG-Wu7en777ptHBpNCJkcnWrOpgYHEnYVM",
  AUTO_READ_STATUS: "true",
  MODE: "privet",
  AUTO_VOICE: "true",
  AUTO_STICKER: "false",
  AUTO_REPLY: "false",
  ALIVE_IMG: "https://ibb.co/dk69bSZ.jpg",
  ALIVE_MSG: "HII DEAR IM ONLINE I'M NURO-MD WHATSAPP BOT 😊♻️",
  ANTI_LINK: "false",
  ANTI_BAD: "true",
  PREFIX: ".",
  FAKE_RECORDING: "true",
  AUTO_REACT: "true",
  OWNER_REACT: "true",
  BOT_NAME: "➺NURO",
};

// Create the configuration by using the environment variables or defaults
const config = Object.keys(defaults).reduce((acc, key) => {
  acc[key] = process.env[key] || defaults[key];
  return acc;
}, {});

module.exports = {
  ...config,
  convertToBool,
};
