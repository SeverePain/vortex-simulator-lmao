const {bot} = require(`../../../index`);
//Event handler for Message


bot.on("message", async message => {

	
if(!message.content) return;
if(!message) return;


if(bot.config.consoleMessage){
console.log(`${message.guild.name} > #${message.channel.name} > ${message.author.tag}: ${message.content}`)
}

if(message.author.id !== bot.user.id) return;

let prefix = bot.config.botSettings.prefix;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);


//Checks if a command has been issued	
let commandfile = bot.commands.get(cmd.slice(prefix.length));


if(!commandfile){

    let newMSG = message.content.toLowerCase()
    if(!bot.config.britSlang) return;
    let dic = {
        "mom": "nan",
        "kill": "shank",
        "ikr": "innit",
        "isn't it": "innit",
        "isnt it": "innit",
        "coffee": "tea",
        "idiot": "bludcart",
        "leave": "brexit",
        "fuck": "slam",
        "raped": "clapped",
        "rape": "clap",
        "retard": "wanker",
        "fucking": "bloody"
    }
    for (var prop in dic){
        if(message.content.toLowerCase().includes(prop)){
           newMSG = newMSG.replace(prop, dic[prop])
           message.edit(newMSG)
        }
        else {
            continue;
        }
    }



}

if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())){
    return; 
   } 

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
