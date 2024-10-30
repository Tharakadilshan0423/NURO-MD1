const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "ඉමේජ් යූආර් එල්",
ALIVE_MAG: process.env.ALIVE_MSG || "HELLOW, IAM NURO",
};
