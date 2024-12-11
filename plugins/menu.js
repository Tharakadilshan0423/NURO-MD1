/*
 DONT COPY
*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*
    
     *꧁🧸ྀི*𝐍𝐔𝐑𝐎 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔*🧸ྀི꧂*
*❖╭─────────────···▸*
*❖│▸*➤ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸*➤ *ᴍᴏᴅᴇ* : *ᴘʀɪᴠᴇᴛ*
*❖│▸*➤ *ᴘʀᴇғɪx* : *.*
*❖│▸*➤ *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸*➤ *ɴᴀᴍᴇ ʙᴏᴛ* : *❖NURO❖*
*❖│▸*➤ *ᴄʀᴇᴀᴛᴏʀ* : *➺THARAKA DILSHAN࿐*
*❖│▸*➤ *ᴠᴇʀsɪᴏɴs* : *ᴠ.1.0.0*
*❖│▸*➤ *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*❖╰────────────···▸▸*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
*╭╼╼╼╼╼╼╼╼╼╼*
*├➤ 1 • OWNER💜*
*├➤ 2 • CONVERT💜*
*├➤ 3 • AI💜*
*├➤ 4 • SEARCH💜*
*├➤ 5 • DOWNLOAD💜*
*├➤ 6 • MAIN💜*
*├➤ 7 • GROUP💜*
*├➤ 8 • FUN💜*
*├➤ 9 • TOOLS💜*
*├➤ 10 • OTHER💜*
*╰╼╼╼╼╼╼╼╼╼╼*
* ▣▣▣▣▣▣▣▣▣▣▣▣*⁠⁠⁠⁠

*ׂ╰┈➤Reply with the Number you want to select

*NURO MD CREATED BY THARAKA DILSHANッ*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://imgur.com/JrxH6Tk.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*꧁◈╾──────OWNER COMMAND LIST──────╼◈꧂*

╭────────●●►
│ ➽ *restart* 
│ ➽ *block*
│ ➽ *setting*
│ ➽ *unblock*
│ ➽ *jid*
╰────────────────────●●►

⭓ *Total Commands List OWNER: 1*

*©NURO MD CREATED BY THARAKA DILSHANッ*`);
                        break;
                    case '2':               
                        repl (`꧁*◈╾──────CONVERT COMMAND LIST──────╼◈꧂*

╭────────●●►
│ ➽ *convert* 
│ ➽ *ss* 
╰────────────────────●●►

⭓ *Total Commands List CONVERT: 1*

*©NURO MD CREATED BY THARAKA DILSHANッ*`);
                        break;
                    case '3':               
                        reply(`꧁*◈╾──────AI COMMAND LIST──────╼◈꧂*

╭────────●●►
│ ➽ *ai* 
╰────────────────────●●►

⭓ *Total Commands List AI: 1*

*©NURO MD CREATED BY THARAKA DILSHANッ*`);
                        break;
                    case '4':               
                        reply(`*꧁◈╾──────SEARCH COMMAND LIST──────╼◈꧂*

╭────────●●►
│ ➽ *yt* 
╰────────────────────●●►
╭────────●●►
│ ➽ *song* 
╰────────────────────●●►
╭────────●●►
│ ➽ *video* 
╰────────────────────●●►
╭────────●●►
│ ➽ *movie* 
╰────────────────────●●►

⭓ *Total Commands List SEARCH: 2*

*NURO MD CREATED BY THARAKA DILSHANッ*`);
                        break;
                    case '5':               
                        reply(`*꧁◈╾──────DOWNLOAD COMMAND LIST──────╼◈꧂*

╭────────●●►
│ ➽ *apk* 
╰────────────────────●●►
╭────────●●►
│ ➽ *twitter* 
╰────────────────────●●►
╭────────●●►
│ ➽ *gdrive* 
╰────────────────────●●►
╭────────●●►
│ ➽ *mediafire* 
╰────────────────────●●►
╭────────●●►
│ ➽ *fb* 
╰────────────────────●●►
╭────────●●►
│ ➽ *ig* 
╰────────────────────●●►
╭────────●●►
│ ➽ *movie* 
╰────────────────────●●►
╭────────●●►
│ ➽ *song* 
╰────────────────────●●►
╭────────●●►
│ ➽ *video* 
╰────────────────────●●►
╭────────●●►
│ ➽ *play/yt* 
╰────────────────────●●►
╭────────●●►
│ ➽ *yt* 
╰────────────────────●●►
╭────────●●►
│ ➽ *tiktok* 
╰────────────────────●●►
╭────────●●►
│ ➽ *img* 
╰────────────────────●●►

⭓ *Total Commands List DOWNLOAD: 14*

*©NURO MD CREATED BY THARAKA DILSHANッ*`);
                        break;
                    case '6':               
                        reply(`*꧁◈╾──────MAIN COMMAND LIST──────╼◈꧂*

╭────────●●►
│ ➽ *alive* 
╰────────────────────●●►
╭────────●●►
│ ➽ *about* 
╰────────────────────●●►
╭────────●●►
│ ➽ *menu* 
╰────────────────────●●►
╭────────●●►
│ ➽ *allmenu* 
╰────────────────────●●►
╭────────●●►
│ ➽ *support* 
╰────────────────────●●►
╭────────●●►
│ ➽ *system* 
╰────────────────────●●►
╭────────●●►
│ ➽ *ping* 
╰────────────────────●●►
╭────────●●►
│ ➽ *runtime* 
╰────────────────────●●►

⭓ *Total Commands List MAIN: 8*

*©NURO MD CREATED BY THARAKA DILSHANッ*`);
                        break;
                    case '7':               
                        reply(`*꧁◈╾──────GROUP COMMAND LIST──────╼◈꧂*

╭────────●●►
│ ➽ *promote* 
╰────────────────────●●►
╭────────●●►
│ ➽ *demote* 
╰────────────────────●●►
╭────────●●►
│ ➽ *kick* 
╰────────────────────●●►
╭────────●●►
│ ➽ *add* 
╰────────────────────●●►
╭────────●●►
│ ➽ *admins* 
╰────────────────────●●►
╭────────●●►
│ ➽ *tagall* 
╰────────────────────●●►
╭────────●●►
│ ➽ *getpic* 
╰────────────────────●●►
╭────────●●►
│ ➽ *setwelcome* 
╰────────────────────●●►
╭────────●●►
│ ➽ *setgoodbye* 
╰────────────────────●●►
╭────────●●►
│ ➽ *admins* 
╰────────────────────●●►
╭────────●●►
│ ➽ *gname* 
╰────────────────────●●►
╭────────●●►
│ ➽ *tagall* 
╰────────────────────●●►
╭────────●●►
│ ➽ *tagadmin* 
╰────────────────────●●►
╭────────●●►
│ ➽ *opentime/closetime* 
╰────────────────────●●►
╭────────●●►
│ ➽ *groupinfo* 
╰────────────────────●●►
╭────────●●►
│ ➽ *grouplink* 
╰────────────────────●●►

⭓ *Total Commands List GROUP: 11*

*NURO MD CREATED BY THARAKA DILSHANッ*`);
                       break;
                    case '8':               
                        reply(`*꧁◈╾──────FUN COMMAND LIST──────╼◈꧂*

╭────────●●►
│ ➽ *dog* 
╰────────────────────●●►
╭────────●●►
│ ➽ *fact* 
╰────────────────────●●►
╭────────●●►
│ ➽ *hack* 
╰────────────────────●●►
╭────────●●►
│ ➽ *quote* 
╰────────────────────●●►
╭────────●●►
│ ➽ *loli* 
╰────────────────────●●►


⭓ *Total Commands List FUN: 4*

*NURO MD CREATED BY THARAKA DILSHANッ*`);

                        break;
                    case '10':               
                        reply(`*꧁◈╾──────OTHER COMMAND LIST──────╼◈꧂*


╭────────●●►
│ ➽ *trt* 
╰────────────────────●●►
╭────────●●►
│ ➽ *weather* 
╰────────────────────●●►

╭────────●●►
│ ➽ *save* 
╰────────────────────●●►

⭓ *Total Commands List OTHER: 3*

*NURO MD CREATED BY THARAKA DILSHANッ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
