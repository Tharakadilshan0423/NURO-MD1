const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config');

cmd({ 
    pattern: 'movie', 
    desc: 'Fetch detailed information about a movie.', 
    category: 'utility', 
    react: '🎞️', 
    filename: __filename 
}, async (message, args) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return message.reply('📽️ Please provide the name of the movie.');
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === 'False') {
            return message.reply('❌ Movie not found.');
        }

        const movieInfo = `
        *🎬 NURO-MD 🎬*
        *Title:* ${data.Title}
        *Year:* ${data.Year}
        *Rated:* ${data.Rated}
        *Released:* ${data.Released}
        *Runtime:* ${data.Runtime}
        *Genre:* ${data.Genre}
        *Director:* ${data.Director}
        *Writer:* ${data.Writer}
        *Actors:* ${data.Actors}
        *Language:* ${data.Language}
        *Country:* ${data.Country}
        *IMDb Rating:* ${data.imdbRating}
        *Awards:* ${data.Awards}
        *Poster:* ${data.Poster}
        `;

        await message.sendMessage(message.from, {
            image: { url: data.Poster },
            caption: movieInfo
        }, { quoted: args });
    } catch (error) {
        console.error(error);
        message.reply(`❌ Error: ${error.message}`);
    }
});
