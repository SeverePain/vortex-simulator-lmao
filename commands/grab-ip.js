const Discord = require("discord.js");
let https = require(`https`)

module.exports.run = async (bot, message, args) => {

    console.log(`[BOT] (fake)Grab IP Command Intiated!`)

if(!args[0]){
    let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}grab-ip [@user/userid]\` `)
    setTimeout(function(){
        message.delete()
        m.delete()
        }, 5000)
        
        return;    
}

try{
    await bot.fetchUser(args[0].replace(`<@`, '').replace(`>`, ''))
    }
    catch{
        let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}grab-ip [@user/userid]\` `)
        setTimeout(function(){
            message.delete()
            m.delete()
            }, 5000)
        return  
    }

    function makeid(length) {
      var result           = '';
      var characters       = '0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
    let ip = `${makeid(3)}.${makeid(3)}.${makeid(3)}.${makeid(2)}`
  message.react(`${bot.config.botSettings.reactionEmoji}`)

let user = await bot.fetchUser(args[0].replace(`<@`, '').replace(`>`, '')) 

let m = await message.reply(`:hourglass: Gathering information and getting **${user.tag}**'s IP!`)

setTimeout(async function(){

    await m.edit(`:white_check_mark: Successfully grabbed **${user.tag}**'s IP! Check console!`)
    console.log(`[BOT] ${user.tag}'s (fake) IP is: ${ip}`)
    }, 5000)
    

return;

}
 
module.exports.help = {
  name: "grab-ip",
  usage: "{prefix}grab-ip [@user/userid]"
}
