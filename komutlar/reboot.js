const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  


module.exports.run = async (bot, message, args) => { 
   
  var embed2 = new Discord.RichEmbed()   
      .setTitle('Fynx Music - Hata')
      .setDescription('Bu komutu kullanabilmek için bot yapımcısı olman gerekmektedir.\nBot yapımcıları; <@327064201245753344> <@236173144300191754>')
      .setColor('RED') 
  

  if(message.author.id !== ["327064201245753344", "236173144300191754"]) return message.channel.sendEmbed(embed2)
     
  //Cortex botun reboot sistemi hadi h.o
  var embed = new Discord.RichEmbed()   
      .setTitle('**Merhaba Sahibim Pudochu,**')
      .setDescription('Beni yeniden başlatmak  istediğine eminsen aşağıdaki **TİK** işaretine, bir kere dokunur musun?')
      .setColor('RANDOM')
message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["✅"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => message.delete().then(mr => sentEmbed.delete()).then(m => message.delete()).then(m2 => message.author.send("Yeniden Başlatma İşlemi iptal ettim! "))) 
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {
  try {
    message.delete().then(mr => sentEmbed.delete()).then(wb => { 
 console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
    })
  } catch (err) {
  // Pudochu
    message.channel.send(`**Hata:** \n\`\`\`js\n${err}\n\`\`\``);
  
};

        }
    })
})

};
exports.config = {
  name: 'reboot',
  aliases: ['yeniden-başlat', "restart"]
};

