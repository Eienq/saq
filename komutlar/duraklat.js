const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(FynxHata) 
.setTitle("• Hata: 006 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Oynatılan bir müziği duraklatabilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`Fynx Music © 2020 - All right reserved.`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(FynxHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`Fynx Music © 2020 - All right reserved.`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//  
const sarki = await client.player.pause(message.guild.id);
const embed = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Duraklat")
.setDescription(`<a:tik:734892939737694239>  | \`${sarki.name}\` adlı müzik ${message.author} tarafından duraklatıldı!`) 
.setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music © 2020 - All right reserved.`, client.user.avatarURL())
message.channel.send(embed)
};

module.exports.config = {
  name: "duraklat",
  aliases: []
}