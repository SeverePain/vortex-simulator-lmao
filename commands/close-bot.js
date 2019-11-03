const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.author.id == bot.user.id){
        let m = await message.reply(`:no_entry: Closing Bot!:`)
	console.log(`[BOT] Close command registered! Closing Bot!`)
setTimeout(function(){
m.edit(":white_check_mark: Bot closed!")
}, 3000)
setTimeout(function(){
m.delete()
message.delete()
}, 3000)
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
