const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
  
let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata4 = new Discord.MessageEmbed()
.setColor(FynxHata) 
.setTitle("• Hata: 004 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Oynatılan bir müziği geçebilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata4)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(FynxHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//
  
const sarki = await client.player.skip(message.guild.id);
  
//------------------------------------------------//

const embed = new Discord.MessageEmbed() 
.setColor(FynxDogru) 
.setTitle("Fynx Music - Atla")
.setDescription(`<a:tik:734892939737694239>  | \`${sarki.name}\` adlı müzik ${message.author} tarafından geçildi!`) 
.setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL())
message.channel.send(embed)
  
//------------------------------------------------//
  

};

module.exports.config = {
    name: "atla",
    aliases: ["geç", "s", "skip"]
};
