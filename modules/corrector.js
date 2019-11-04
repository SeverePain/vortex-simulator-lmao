
async function correct(bot, message){
	
	
	if(message.author.id !== bot.user.id) return;
	if(!message.author.id == bot.user.id) return;
	if(!bot.config.britSlang) return;
let dic = {
	"mom": "nan",
	"kill": "shank",
	"ikr": "innit",
	"coffee": "tea",
	"idiot": "bludcart",
	"leave": "brexit"
}

for (var prop in dic){
	if(message.content.toLowerCase().includes(prop)){
		let newMSG = message.content.toLowerCase().replace(prop.toLowerCase(), dic[prop].toLowerCase)
     message.edit(newMSG)
	
	
	}
}
	
}

module.exports = correct