const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.react(`${bot.config.botSettings.reactionEmoji}`)

let m = message.channel.send(`:information_source: Check Console!`)

console.log(`[BOT] Help Command Detected!`)
console.log(`[BOT] Command List:`)

bot.commands.array().forEach(async command => {
    console.log(`[BOT] ${command.help.name}: ${command.help.usage}`)
})

setTimeout(async function(){

    await m.delete()
    
    }, 5000)
    

return;

}
 
module.exports.help = {
  name: "help",
  usage: "{prefix}help"
}
