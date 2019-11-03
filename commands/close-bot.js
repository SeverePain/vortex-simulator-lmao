const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.author.id !== bot.user.id) return;
else{
	console.log(`[BOT] Close command registered! Closing Bot!`)
	process.exit()
}

}
 
module.exports.help = {
  name: "close-bot",
  usage: "{prefix}close-bot]"
}
