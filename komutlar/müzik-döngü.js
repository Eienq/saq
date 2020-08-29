const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {

  const embed = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Pirate |  Döngü")
.setDescription(`<a:pirate:749380925619437619> | Müzik döngüsü, ${message.author} tarafından \`aktif\` edildi.`) 
.setThumbnail(`https://i.hizliresim.com/4Q3agT.jpg`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());
  
  const embedd = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Pirate | Döngü")
.setDescription(`<a:pirate:749380925619437619> | Müzik döngüsü, ${message.author} tarafından \`de-aktif\` edildi.`) 
.setThumbnail(`https://i.hizliresim.com/4Q3agT.jpg`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());  
  

  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 008 •")
.setThumbnail(`https://i.hizliresim.com/4Q3agT.jpg`)
.setDescription(`<a:pirate:749380925619437619>  | Döngüyü ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(`https://i.hizliresim.com/4Q3agT.jpg`)
.setDescription(`<a:pirate:749380925619437619>  | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//  
const dongu = client.player.getQueue(message.guild.id).repeatMode;
if(dongu){
client.player.setRepeatMode(message.guild.id, false);
return message.channel.send(embedd)
    } else {
client.player.setRepeatMode(message.guild.id, true);
return message.channel.send(embed)
    }
};

module.exports.config = {
    name: "döngü",
    aliases: []
};
