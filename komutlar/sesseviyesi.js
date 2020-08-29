const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(FynxHata) 
.setTitle("• Hata: 012 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Oynatılan bir müziğin ses seviyesini ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(FynxHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//  
let sesseviyesi = parseInt(args.join(" "));
if (!sesseviyesi) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Ses seviyesini ayarlayabilmek için sadece pozitif bir doğal sayı giriniz.` }})
if (args > 200) return message.channel.send({embed: {color: FynxHata, description: `Ses seviyesini sadece \`0\` ile \`200\` arasında ayarlayabilirsiniz. `}})
if (args < 0) return message.channel.send({embed: {color: FynxHata, description: `Ses seviyesini sadece \`0\` ile \`200\` arasında ayarlayabilirsiniz. ` }})
  client.player.setVolume(message.guild.id, sesseviyesi);
      const embedd = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Ses Seviyesi")
.setDescription(`<a:tik:734892939737694239>  | Ses seviyesi, ${message.author} tarafından \`${args.join(" ")}\` olarak ayarlandı.`) 
.setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());   
message.channel.send(embedd)
}

module.exports.config = {
  name: "ses",
  aliases: ['ses-seviyesi']
};
