const Discord = require("discord.js");
let https = require(`https`)
let axios = require(`axios`)

module.exports.run = async (bot, message, args) => {

    console.log(`[BOT] (fake)Dox Command Intiated!`)

if(!args[0]){
    let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}dox [@user/userid]\` `)
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
        let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}dox [@user/userid]\` `)
        setTimeout(function(){
            message.delete()
            m.delete()
            }, 5000)
        return  
    }

let obj = {}
const agent = new https.Agent({  
  rejectUnauthorized: false
});
axios.get('https://api.namefake.com/english-united-states/male', { httpsAgent: agent }).then(function (response) {
	
console.log(`[BOT] ${user.tag}'s (fake) Dox is: 
Name: ${JSON.stringify(response.data.name)}
Address: ${JSON.stringify(response.data.address.replace("\n", " "))}
Birthday: ${JSON.stringify(response.data.birth_data)}
(this is a randomly generated info!)`)
  })
  .catch(async function (error) {
	          let m = await message.channel.send(`:x: Something went wrong with the Name Generation API! Please try again later!`)
        setTimeout(function(){
            message.delete()
            m.delete()
            }, 5000)
			
    console.log(error);
return;
  })
     
    
  message.react(`${bot.config.botSettings.reactionEmoji}`)

let user = await bot.fetchUser(args[0].replace(`<@`, '').replace(`>`, '')) 

let m = await message.reply(`:hourglass: Gathering information and doxing **${user.tag}**!`)

setTimeout(async function(){

    await m.edit(`:white_check_mark: Successfully doxed **${user.tag}**! Check console!`)
    


    }, 5000)
    

return;

}
 
module.exports.help = {
  name: "dox",
  usage: "{prefix}dox [@user/userid]"
}
