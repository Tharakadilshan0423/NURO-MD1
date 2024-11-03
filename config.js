const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LdQg2YDb#z4Y8S860ZYG-Wu7en777ptHBpNCJkcnWrOpgYHEnYVM",
MONGODB: process.env.MONGODB || ""
};
