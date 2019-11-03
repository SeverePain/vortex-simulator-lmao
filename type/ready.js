const {bot} = require(`../index`);
const config = bot.config

//Event handler for Message


bot.on("ready", async () => {
    
    console.log(`---------------------------------------`)
    console.log(`[BOT] Vortex Emulator by severepain loaded!`)
    console.log(`---------------------------------------`)
    console.log(`Bot is online on ${bot.guilds.size} guilds!`)


})
