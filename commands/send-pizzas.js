const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
console.log(`[BOT] Send-Pizzas command detected!`)
/*
* Args[0] = user
* Args[1] = Type of pizza
* Args[2] = amount of pizzas
*/

if(!args[0]){
    let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}send-pizzas [@user/userid] [type] [amount]\` `)
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
    let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}send-pizzas [@user/userid] [type] [amount]\` `)
    setTimeout(function(){
        message.delete()
        m.delete()
        }, 5000)
    return  
}

let user = await bot.fetchUser(args[0].replace(`<@`, '').replace(`>`, ''))

if(!user){
    let m = await message.channel.send(`:x: Invalid Arguments! \`${bot.config.botSettings.prefix}send-pizzas [@user/userid] [type] [amount]\` `)
    setTimeout(function(){
        message.delete()
        m.delete()
        }, 5000)
    return  
}

message.react(`${bot.config.botSettings.reactionEmoji}`)

if(!args[1] &&! args[2]){
    let m = await message.channel.send(`:hourglass: Sending a pizza to <@${args[0].replace(`<@`, '').replace(`>`, '')}>!`)
    setTimeout(function(){
        m.edit(`:white_check_mark: Sent a pizza to <@${args[0].replace(`<@`, '').replace(`>`, '')}>!`)
        }, 5000)
return 
}

if(!args[1]){
    let m = await message.channel.send(`:hourglass: Sending <@${args[0].replace(`<@`, '').replace(`>`, '')}> ${args[2]} pizzas!`)
    setTimeout(function(){
        m.edit(`:white_check_mark: Sent <@${args[0].replace(`<@`, '').replace(`>`, '')}> ${args[2]} pizzas!`)
        }, 5000)
return 
}
if(args[1] &&! args[2]){
    let m = await message.channel.send(`:hourglass: Sending <@${args[0].replace(`<@`, '').replace(`>`, '')}> ${args[1]} pizzas!`)
    
setTimeout(function(){
    m.edit(`:white_check_mark: Sent <@${args[0].replace(`<@`, '').replace(`>`, '')}> ${args[1]} pizzas!`)
    }, 5000)
    
return 
}

let m = await message.channel.send(`:hourglass: Sending <@${args[0].replace(`<@`, '').replace(`>`, '')}> ${args[1]} ${args[2]} pizzas!`)

setTimeout(function(){
m.edit(`:white_check_mark: Sent <@${args[0].replace(`<@`, '').replace(`>`, '')}> ${args[1]} ${args[2]} pizzas!`)
}, 5000)

}
 
module.exports.help = {
  name: "send-pizzas",
  usage: "{prefix}send-pizzas [@user/userid] [type] [amount]"
}
