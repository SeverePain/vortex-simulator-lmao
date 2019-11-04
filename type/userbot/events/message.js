const {bot} = require(`../../../index`);
//Event handler for Message


bot.on("message", async message => {
	
if(!message.content) return;
if(!message) return;

if(message.channel.type === "dm") return;

if(bot.config.consoleMessage){
console.log(`${message.guild.name} > #${message.channel.name} > ${message.author.tag}: ${message.content}`)
}

if(message.author.id !== bot.user.id) return;

let prefix = bot.config.botSettings.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);


//Checks if a command has been issued	

if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())){
     return; 
    } 

let commandfile = bot.commands.get(cmd.slice(prefix.length));

if(bot.user.bot){
    
    if(message.author.id == bot.user.id){
        try{
            if(!bot.config.commands[commandfile.help.name]){
                let m = await message.reply(`:x: That command is disabled in the config.json file!`)
                setTimeout(function(){
                    message.delete()
                    m.delete()}, 5000)
                return;
            }

    if(commandfile) commandfile.run(bot,message,args)
		else {
			
			require(`../../../modules/corrector`)(bot, message)
		}
		
        }
        catch{
            let m = await message.reply(`:x: That is not a command!`)
            setTimeout(function(){m.delete()
            message.delete()
            }, 5000)
            return;
        }
    }

}
else{
try{
    if(!bot.config.commands[commandfile.help.name]){
        let m = await message.reply(`:x: That command is disabled in the config.json file!`)
        setTimeout(function(){
            message.delete()
            m.delete()}, 5000)
        return;
    }
    if(commandfile) commandfile.run(bot,message,args)
}
catch{
    let m = await message.reply(`:x: That is not a command!`)
    setTimeout(function(){m.delete()
    message.delete()
    }, 5000)
    return;
}
}

})
