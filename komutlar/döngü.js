const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {

  const embed = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Döngü")
.setDescription(`<a:tik:734892939737694239>  | Müzik döngüsü, ${message.author} tarafından \`aktif\` edildi.`) 
.setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());
  
  const embedd = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Döngü")
.setDescription(`<a:tik:734892939737694239>  | Müzik döngüsü, ${message.author} tarafından \`de-aktif\` edildi.`) 
.setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());  
  

  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(FynxHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Döngüyü ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(FynxHata) 
.setTitle("• Hata: 002 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());    
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
