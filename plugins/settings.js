/*
created by tharaka
 DONT COPY
*/




const { updateEnv, readEnv } = require('../lib/database')
const EnvVar = require('../lib/mongodbenv')
const { cmd } = require('../command')
const sensitiveData = require('../auth_info_baileys/a/b/c/d/dddamsbs')
async function handleUpdate(reply, key, newValue, validation, errorMsg) {
  if (validation && !validation(newValue)) {
    return reply(errorMsg)
  }
  try {
    await updateEnv(key, newValue)
    reply(`*This is success...✅*\n${newValue}`)
  } catch (err) {
    console.error(`Error updating ${key}: ` + err.message)
    reply(`🙇‍♂️ *Failed to update ${key}. Please try again.*\n` + err)
  }
}
cmd(
  {
    pattern: 'settings',
    alias: ['setting'],
    react: '⚙️',
    desc: 'Check bot online or not.',
    category: 'main',
    filename: __filename,
  },
  async (
    conn,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      return await conn.sendMessage(
        from,
        {
          image: { url: 'https://imgur.com/h1QfnbH.jpeg' },
          caption: `*${sensitiveData.QUEEN}*\n\n💥𝗬𝗢𝗨𝗥 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦💥\ntype - .mysetting\n\n💥𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘💥\nex - .ownername ${sensitiveData.ajababaaaaaa}\n\n💥𝗢𝗪𝗡𝗘𝗥 𝗡𝗨𝗠𝗕𝗘𝗥💥\nex - .ownernumber 94760534874\n\n💥𝗢𝗪𝗡𝗘𝗥 𝗙𝗥𝗢𝗠💥\nex - .ownerfrom matara\n\n💥𝗢𝗪𝗡𝗘𝗥 𝗔𝗚𝗘💥\nex - .ownerage 16\n\n💥𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗💥\nex - .ownercommand dilo\n\n💥𝗔𝗟𝗜𝗩𝗘𝗜𝗠𝗚💥\nex - .aliveimg (img url)\n\n💥𝗔𝗟𝗜𝗩𝗘𝗠𝗦𝗚💥\nex - .alivemsg (your alive msg)\n\n💥𝗣𝗥𝗘𝗙𝗜𝗫💥\nex - .prefix,*&%$#\n\n💥𝗔𝗨𝗧𝗢𝗦𝗧𝗔𝗧𝗘𝗦💥\n*true or false*\nex - .autostates true\n\n💥𝗠𝗢𝗗💥𝗘\n*private, public, groups, inbox*\nex - .mode public\n\n💥𝗔𝗨𝗧𝗢𝗩𝗢𝗜𝗖𝗘💥\n*true or false*\nex - .autovoice true\n\n💥𝗔𝗨𝗧𝗢𝗜𝗠𝗚💥\n*true or false*\nex - .autoimg true\n\n💥𝗔𝗨𝗧𝗢𝗩𝗜𝗗𝗘𝗢💥\n*true or false*\nex - .autovideo true\n\n💥𝗔𝗨𝗧𝗢𝗦𝗧𝗜𝗖𝗞𝗘𝗥💥\n*true or false*\nex - .autosticker true\n\n💥𝗔𝗨𝗧𝗢𝗥𝗘𝗣𝗟𝗬💥\n*true or false*\nex - .autoreply true\n\n💥𝗔𝗜𝗖𝗛𝗔𝗧💥\n*true or false*\nex - .aichat true\n\n💥𝗪𝗔𝗥𝗡𝗖𝗢𝗨𝗡𝗧💥\nex - .warncount 10\n\n💥𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞💥\n*delete, warn, kick, off*\nex - .antilink delete\n\n💥𝗔𝗡𝗧𝗜𝗕𝗔𝗗💥\n*delete, warn, kick, off*\nex - .antibad delete\n\n💥𝗔𝗡𝗧𝗜𝗩𝗢𝗜𝗖𝗘💥\n*delete, warn, kick, off*\nex - .antivoice delete\n\n💥𝗔𝗡𝗧𝗜𝗦𝗧𝗜𝗖𝗞𝗘𝗥💥\n*delete, warn, kick, off*\nex - .antisticker delete\n\n💥𝗔𝗡𝗧𝗜𝗜𝗠𝗚💥\n*delete, warn, kick, off*\nex - ✂.antiimg delete\n\n💥𝗔𝗡𝗧𝗜𝗩𝗜𝗗𝗘𝗢💥\n*delete, warn, kick, off*\nex - ✂.antivideo delete`,
        },
        { quoted: mek }
      )
    } catch (e) {
      console.log(e)
      reply(`${e}`)
    }
  }
)
cmd(
  {
    pattern: 'mysettings',
    alias: ['mysetting', 'botsettings', 'botsetting', 'welcomestates'],
    desc: 'List all current bot settings',
    category: 'owner',
    react: '⚙️',
    thumbnail: 'https://telegra.ph/file/959a00b8f92106a8856de.jpg',
    filename: __filename,
  },
  async (conn, mek, m, { reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    try {
      const allEnvVars = await EnvVar.find({})
      const envList = allEnvVars
        .map((env) => `${env.key}: ${env.value}`)
        .join('\n')
      return reply(`𝗬𝗢𝗨𝗥 𝗦𝗘𝗧𝗧𝗜𝗡𝗚\n\n${envList}`)
    } catch (err) {
      console.error('Error fetching environment variables: ' + err.message)
      return reply(
        '\uD83D\uDE47‍\u2642️ *Failed to fetch settings. Please try again.*'
      )
    }
  }
)
cmd(
  {
    pattern: 'ownernumber',
    desc: "Update the owner's WhatsApp number",
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        'Please set your number using the correct format:\n\nExample: `.ownernumber 94760534874`'
      )
    }
    const formattedNumber = q.endsWith('@s.whatsapp.net')
      ? q
      : `${q}@s.whatsapp.net`
    handleUpdate(
      reply,
      'OWNER_NUMBER',
      formattedNumber,
      (val) => val.endsWith('@s.whatsapp.net'),
      '\uD83D\uDE13 *Invalid WhatsApp number format.* Please use: `94760534874`'
    )
  }
)
cmd(
  {
    pattern: 'aliveimg',
    desc: 'Update the alive image URL',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        'Please set your image URL using the correct format:\n\nExample: `.aliveimg https://imgur.com/h1QfnbH.jpg`'
      )
    }
    handleUpdate(
      reply,
      'ALIVE_IMG',
      q,
      (val) => val.startsWith('https://'),
      '\uD83D\uDE13 *Invalid URL format. Please provide a valid image URL.*'
    )
  }
)
cmd(
  {
    pattern: 'alivemsg',
    desc: 'Update the alive message',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        'Please set your alive message using the correct format:\n\nExample: `.alivemsg Your alive message here`'
      )
    }
    handleUpdate(reply, 'ALIVE_MSG', q, null, null)
  }
)
cmd(
  {
    pattern: 'prefix',
    desc: 'Update the command prefix',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q || q.length > 3) {
      return reply(
        'Please set a valid prefix (1-3 characters) using the correct format:\n\nExample: `.prefix !`'
      )
    }
    handleUpdate(reply, 'PREFIX', q, null, null)
  }
)
cmd(
  {
    pattern: 'autostates',
    desc: 'Enable or disable auto-read status',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_READ_STATUS',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'mode',
    desc: 'Update bot mode',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['private', 'public', 'groups', 'inbox']
    handleUpdate(
      reply,
      'MODE',
      q,
      (val) => validModes.includes(val),
      `😒 *Invalid mode. Valid modes are: ${validModes.join(', ')}*`
    )
  }
)
cmd(
  {
    pattern: 'autovoice',
    desc: 'Enable or disable auto voice',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_VOICE',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'autoimg',
    desc: 'Enable or disable auto image',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_IMAGE',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'autovideo',
    desc: 'Enable or disable auto video',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_VIDEO',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `on` or `off`.*'
    )
  }
)
cmd(
  {
    pattern: 'autosticker',
    desc: 'Enable or disable auto sticker',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_STICKER',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'autoreply',
    desc: 'Enable or disable auto reply',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_REPLY',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'aichat',
    desc: 'Enable or disable AI chat',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_AI',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'warncount',
    desc: 'Set the warn count limit',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q || isNaN(q) || q <= 0) {
      return reply(
        '\uD83D\uDE13 *Invalid number. Please provide a valid number greater than 0 for warn count.*\n\nExample: `.warncount 3`'
      )
    }
    handleUpdate(
      reply,
      'WARN_COUNT',
      q,
      (val) => !isNaN(val),
      '\uD83D\uDE13 *Invalid number. Please provide a valid number for warn count.*'
    )
  }
)
cmd(
  {
    pattern: 'antilink',
    desc: 'Set anti-link action',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validActions = ['delete', 'warn', 'kick', 'off']
    handleUpdate(
      reply,
      'ANTI_LINK',
      q,
      (val) => validActions.includes(val),
      `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`
    )
  }
)
cmd(
  {
    pattern: 'antibad',
    desc: 'Set anti-bad-words action',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validActions = ['delete', 'warn', 'kick', 'off']
    handleUpdate(
      reply,
      'ANTI_BAD',
      q,
      (val) => validActions.includes(val),
      `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`
    )
  }
)
cmd(
  {
    pattern: 'antivoice',
    desc: 'Set anti-voice action',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validActions = ['delete', 'warn', 'kick', 'off']
    handleUpdate(
      reply,
      'ANTI_VOICE',
      q,
      (val) => validActions.includes(val),
      `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`
    )
  }
)
cmd(
  {
    pattern: 'antisticker',
    desc: 'Set anti-sticker action',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validActions = ['delete', 'warn', 'kick', 'off']
    handleUpdate(
      reply,
      'ANTI_STICKER',
      q,
      (val) => validActions.includes(val),
      `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`
    )
  }
)
cmd(
  {
    pattern: 'antiimg',
    desc: 'Set anti-photo action',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validActions = ['delete', 'warn', 'kick', 'off']
    handleUpdate(
      reply,
      'ANTI_PHOTO',
      q,
      (val) => validActions.includes(val),
      `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`
    )
  }
)
cmd(
  {
    pattern: 'antivideo',
    desc: 'Set anti-video action',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validActions = ['delete', 'warn', 'kick', 'off']
    handleUpdate(
      reply,
      'ANTI_VIDEO',
      q,
      (val) => validActions.includes(val),
      `😓 *Invalid action. Valid actions are: ${validActions.join(', ')}*`
    )
  }
)
cmd(
  {
    pattern: 'ownername',
    desc: 'Update the owner name',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        '\uD83D\uDE13 *Please set your name.*\nExample: `.ownername Dila`'
      )
    }
    handleUpdate(reply, 'WCPROFILENAME', q, null, null)
  }
)
cmd(
  {
    pattern: 'ownerfrom',
    desc: 'Update the owner from',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        '\uD83D\uDE13 *Please set your location.*\nExample: `.ownerfrom Matara`'
      )
    }
    handleUpdate(reply, 'WCPROFILEFROM', q, null, null)
  }
)
cmd(
  {
    pattern: 'ownerage',
    desc: 'Update the owner age',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        '\uD83D\uDE13 *Please set your age.*\nExample: `.ownerage 20`'
      )
    }
    handleUpdate(
      reply,
      'WCPROFILEAGE',
      q,
      (val) => !isNaN(val),
      '\uD83D\uDE13 *Invalid age. Please provide a valid number.*'
    )
  }
)
cmd(
  {
    pattern: 'ownercommand',
    desc: 'Update the owner command',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        '\uD83D\uDE13 *Please set the command.*\nExample: `.ownercommand dilo`'
      )
    }
    handleUpdate(reply, 'WCPROFILEMSG', q, null, null)
  }
)
cmd(
  {
    pattern: 'xxxxxxxxxjs',
    desc: 'Update the alive message',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        'Please set your msg using the correct format:\n\nExample: `.grouptime group id/open time/close time`'
      )
    }
    handleUpdate(reply, 'GROUP_TIME', q, null, null)
  }
)
cmd(
  {
    pattern: 'welcome',
    desc: 'Enable or disable welcome msg',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'WELCOME',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'welcomealert',
    desc: 'Enable or disable welcomealert',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'WELCOME_ALERT',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'welcomeset',
    desc: 'Update the alive welcome message',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        'Please set your welcome message using the correct format:\n\nExample: `.welcomeset Your welcome message here`'
      )
    }
    handleUpdate(reply, 'WELCOME_SET', q, null, null)
  }
)
cmd(
  {
    pattern: 'groupstimes',
    desc: 'Update the groups open close times',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        'Please set your welcome message using the correct format:\n\nExample: `.groupstimes (A Group ID)(Open Times)(Close Times)/(B Group ID)(Open Time)(Close Time)`\n\n_උදාහරණයක් ලෙස_\n\n.groupstimes (120363339144214528@g.us)(08:00,12:00,18:00)(09:00,14:00,22:00)/(120354639144214528@g.us)(08:30,09:45)(09:00,23:30)/(715563339144214528@g.us)(06:00)(23:00)'
      )
    }
    handleUpdate(reply, 'GROUPS_TIMES', q, null, null)
  }
)
cmd(
  {
    pattern: 'statesmsgkkkkkk',
    desc: 'Enable or disable states mag',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'STATES_MSG_SEND',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'statesrep',
    desc: 'Update the states  message',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        'Please set your alive message using the correct format:\n\nExample: `.statesrep Your message here`'
      )
    }
    handleUpdate(reply, 'STATES_MSG', q, null, null)
  }
)
cmd(
  {
    pattern: 'autoreact',
    desc: 'Enable or disable autoreact',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_REACT',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'allowsonline',
    desc: 'Enable or disable allows online',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'ALLOWS_ONLINE',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'autosave',
    desc: 'Enable or disable auto save',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'AUTO_SAVE',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'statesmsgsend',
    desc: 'Enable or disable auto states message ',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'STATES_SEEN_MESSAGE_SEND_SEND',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
cmd(
  {
    pattern: 'statesmsg',
    desc: 'Update the states  message',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    if (!q) {
      return reply(
        'Please set your alive message using the correct format:\n\nExample: `.statesmsg Your states message here`'
      )
    }
    handleUpdate(reply, 'STATES_SEEN_MESSAGE', q, null, null)
  }
)
cmd(
  {
    pattern: 'statesdownload',
    desc: 'Enable or disable auto states statesdownload ',
    category: 'owner',
    react: '\u2705',
    filename: __filename,
  },
  async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) {
      return reply('_ඔබ බොට් හිමිකරු නොවේ...\uD83D\uDEAB_')
    }
    const validModes = ['true', 'false']
    handleUpdate(
      reply,
      'STATES_DOWNLOAD',
      q,
      (val) => ['true', 'false'].includes(val),
      '\uD83D\uDE13 *Invalid value. Please use `true` or `false`.*'
    )
  }
)
