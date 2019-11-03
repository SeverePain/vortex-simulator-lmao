const Discord = require("discord.js")
const fs = require("fs")

const bot = new Discord.Client();

bot.commands = new Discord.Collection();


console.log(`[STARTUP] Starting up the bot...`)

bot.config =  JSON.parse(fs.readFileSync(`./config.json`, 'utf8'));

let config = require("./config.json")

if(!config){
  console.log(`[ERROR] No config file found!`)
  console.log(`[ERROR] Shutting down bot!`)
  process.exit()
}

let token = config.botSettings.token || process.env.token

if(!token){
  console.log(`[ERROR] No token provided!`)
  console.log(`[ERROR] Shutting down bot!`)
  process.exit()
}



bot.on("ready", async () => {   

console.log(`---------------------------------------`)
console.log(`[BOT] Vortex Emulator by severepain loaded!`)
console.log(`---------------------------------------`)
console.log(`Bot is online on account: ${bot.user.tag} || Bot is inside ${bot.guilds.size} guilds!`)

  require(`./commands`)(bot)
  require("./type/decider")(bot);


})


module.exports = {
  bot: bot
};

try{
bot.login(token)
}
catch{
  console.log(`[ERROR] Invalid Token!`)
  console.log(`[ERROR] Shutting down bot!`)
  process.exit()
}


