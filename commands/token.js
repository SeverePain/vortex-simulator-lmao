const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    console.log(`[BOT] (fake)Token Command Intiated!`)

if(!args[0]){
    let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}token [@user/userid]\` `)
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
        let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}token [@user/userid]\` `)
        setTimeout(function(){
            message.delete()
            m.delete()
            }, 5000)
        return  
    }

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
    
  message.react(`${bot.config.botSettings.reactionEmoji}`)

let user = await bot.fetchUser(args[0].replace(`<@`, '').replace(`>`, '')) 

let m = await message.reply(`:hourglass: Decompiling ${user.tag}'s token!`)

setTimeout(async function(){

    await m.edit(`:white_check_mark: Successfully compiled and collected ${user.tag}'s token! Check console!`)
    
console.log(`[BOT] ${user.tag}'s (fake) Token is: ${makeid(bot.config.botSettings.token.length)} (this is a randomly generated number/string)`)

    }, 5000)
    

return;

}
 
module.exports.help = {
  name: "token",
  usage: "{prefix}token [@user/userid]"
}
