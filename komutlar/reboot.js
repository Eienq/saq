const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar/bot.json")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  


module.exports.run = async (bot, message, args) => { 
   
  var embed2 = new Discord.MessageEmbed()   
      .setColor(FynxHata)
      .setTitle('Fynx Music - Hata')
      .setDescription('Bu komutu kullanabilmek için bot yapımcısı olman gerekmektedir.\nBot yapımcıları; <@327064201245753344> <@236173144300191754>')
      .setColor('RED'); 
 var embed3 = new Discord.MessageEmbed()
.setColor(FynxDogru)      
.setTitle("Fynx Music - Başarılı")
.setDescription("Fynx Music yeniden başlatılıyor.");
var embed4 = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription("Fynx Music yeniden başlatılma işlemi iptal edildi.")
  

  if(message.author.id !== "327064201245753344") return message.channel.send(embed2)
     
  //Cortex botun reboot sistemi hadi h.o
  var embed = new Discord.MessageEmbed()   
      .setTitle(`Merhaba ${message.author.username},`)
      .setDescription(`Fynx Music'i yeniden başlatmak istediğine emin misin?`)
      .setColor('#ffc000')
message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["✅"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => message.delete().then(mr => sentEmbed.delete()).then(m => message.delete()).then(m2 => message.channel.send(embed4))) 
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {
  try {
    message.delete().then(mr => sentEmbed.delete()).then(adam => message.channel.send(embed3)).then(wb => { 
    process.exit(0);
    })
  } catch (err) {
  // Pudochu
    console.log(`**Hata:** \n\`\`\`js\n${err}\n\`\`\``);
  
};

        }
    })
})

};
exports.config = {
  name: 'reboot',
  aliases: ['yeniden-başlat', "restart"]
};

