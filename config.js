const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://www.canva.com/design/DAGVDQWw34c/1GDMp7bSezahQvaMzG3gOA/watch?utm_content=DAGVDQWw34c&utm_campaign=designshare&utm_medium=link&utm_source=editor",
ALIVE_MAG: process.env.ALIVE_MSG || "HELLOW, IAM NURO",
};
