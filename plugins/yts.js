/*
created by tharaka
 DONT COPY
*/




const { cmd } = require('../command')
const yts = require('yt-search')
const { fetchJson } = require('../lib/functions')
const sensitiveData = require('../auth_info_baileys/a/b/c/d/dddamsbs')
const formatViews = (views) =>
  views >= 1000000000
    ? `${(views / 1000000000).toFixed(1)}B`
    : views >= 1000000
    ? `${(views / 1000000).toFixed(1)}M`
    : views >= 1000
    ? `${(views / 1000).toFixed(1)}K`
    : views.toString()
const thumbnailUrl = 'https://i.imgur.com/vzDwkjg.jpeg'
cmd(
  {
    pattern: 'yts',
    alias: ['yta', 'ytv', 'yt'],
    desc: 'Search and display up to 100 YouTube video details',
    category: 'search',
    filename: __filename,
  },
  async (conn, mek, m, { from, q, reply }) => {
    try {
      if (!q) {
        return reply('Please type a Name or Url... \uD83E\uDD16')
      }
      const search = await yts(q)
      const videos = search.videos.slice(0, 100)
      if (videos.length === 0) {
        return reply('No videos found for your query.')
      }
      let message = `*${sensitiveData.QUEEN} 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵 𝗥𝗲𝘀𝘂𝗹𝘁 🎥*\n\n`
      videos.forEach((data, index) => {
        message += `*No - ${index + 1} ⤵*\n`
        message += `🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_\n`
        message += `👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_\n`
        message += `📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_\n`
        message += `⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_\n`
        message += `⏱️ *𝗔𝗴𝗼*: _${data.ago}_\n`
        message += `👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_\n`
        message += `🔗 *𝗟𝗶𝗻𝗸*: ${data.url}\n\n`
      })
      message += `*𝗛𝗼𝘄 𝗧𝗼 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗩𝗶𝗱𝗲𝗼 𝗢𝗿 𝗔𝘂𝗱𝗶𝗼 🍀❓*\n\n`
      message += `Example -  .video (enter video title)\n`
      message += `Example - .song (enter video title)\n\n`
      message += `${sensitiveData.NURO}`
      await conn.sendMessage(
        from,
        {
          image: { url: thumbnailUrl },
          caption: message,
        },
        { quoted: mek }
      )
      await conn.sendPresenceUpdate('recording', from)
      await conn.sendMessage(
        from,
        {
          audio: {
            url: 'https://github.com/LAKSIDUOFFICIAL/QUEEN-ISHU/blob/main/media/voice_song.mp3?raw=true',
          },
          mimetype: 'audio/mpeg',
          ptt: true,
        },
        { quoted: mek }
      )
      await conn.sendMessage(
        from,
        {
          audio: {
            url: 'https://github.com/LAKSIDUOFFICIAL/QUEEN-ISHU/blob/main/media/voice_video.mp3?raw=true',
          },
          mimetype: 'audio/mpeg',
          ptt: true,
        },
        { quoted: mek }
      )
    } catch (e) {
      console.log(e)
      reply(`Error: ${e.message}`)
    }
  }
)
