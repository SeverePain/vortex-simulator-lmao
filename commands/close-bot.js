const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.author.id == bot.user.id){
	console.log(`[BOT] Close command registered! Closing Bot!`)
	process.exit()
}
else{
return;
}
}
 
module.exports.help = {
  name: "close-bot",
  usage: "{prefix}close-bot]"
}
