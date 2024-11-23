// Ensuring proper async handling
const connectToWA = async () => {
  try {
    const connectDB = require('./lib/mongodb');
    connectDB();
    const { readEnv } = require('./lib/database');
    const config = await readEnv();
    const prefix = config.PREFIX;

    console.log("Connecting to WA bot...");
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/dila_md_licence/');
    const { version } = await fetchLatestBaileysVersion();

    const conn = makeWASocket({
      logger: P({ level: 'silent' }),
      printQRInTerminal: false,
      browser: Browsers.macOS("Firefox"),
      syncFullHistory: true,
      auth: state,
      version,
    });

    conn.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update;
      if (connection === 'close') {
        if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
          connectToWA();
        }
      } else if (connection === 'open') {
        console.log('Bot connected to WhatsApp ✅');
        // Initialize plugins
        loadPlugins();
      }
    });

    conn.ev.on('creds.update', saveCreds);
    conn.ev.on('messages.upsert', handleMessage);

  } catch (error) {
    console.error("Error connecting to WA:", error);
  }
};

// Function to handle message
const handleMessage = async (mek) => {
  try {
    const message = mek.messages[0];
    if (!message || !message.message) return;

    // Handle message content...
    const content = JSON.stringify(message.message);
    // Further message handling logic...
  } catch (error) {
    console.error("Error handling message:", error);
  }
};

// Function to load plugins
const loadPlugins = () => {
  const path = require('path');
  fs.readdirSync("./plugins/").forEach((plugin) => {
    if (path.extname(plugin).toLowerCase() === ".js") {
      require("./plugins/" + plugin);
    }
  });
};

// Start the bot
connectToWA();
