
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    let messagecount = parseInt(args[0]) || 99;
	    console.log(`[BOT] Purge command detected! Purging ${messagecount} messages!`)
message.delete()
    var deletedMessages = -1;
    
    message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
        messages.forEach(m => {
            if (m.author.id == bot.user.id) {
                m.delete().catch(console.error);
                deletedMessages++;
            }
        });
    }).then(() => {
        if (deletedMessages === -1) deletedMessages = 0;
        message.channel.send(`:white_check_mark: Purged ${deletedMessages}!`)
            .then(m => m.delete(2000));
    }).catch(console.error);
}
 
module.exports.help = {
  name: "purge",
  usage: "{prefix}purge [number]"
}
