const discord = require(`discord.js`)

async function decider(bot){

    console.log(`[STARTUP] Detecting if the bot is running on a user or bot account!`)

    if(bot.user.bot){
        
    console.log(`[STARTUP] Starting bot up with bot account preset!`)

        require(`./externalbot/functions`)(bot)
        return;
    }
    else{
    
    console.log(`[STARTUP] Bot is not running on a bot account!`)
    console.log(`[STARTUP] Detecting if the bot is running on a bot account!`)

    console.log(`[STARTUP] Starting bot up with user account/selfbot preset!`)

        require(`./userbot/functions`)(bot)
        return;
    }
}

module.exports = decider