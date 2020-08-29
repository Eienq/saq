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
.setTitle("• Hata: 007 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Oynatılan bir müziği durdurabilmek için bir ses kanalında olmanız gerekmektedir!`)
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
  client.player.stop(message.guild.id);
  const embed = new Discord.MessageEmbed()
.setColor(FynxDogru)
  .setTitle("Fynx Music - Durdur")
.setDescription(`<a:tik:734892939737694239>  | Müzikler ${message.author} tarafından durduruldu! Fynx Music ses kanalından ayrılıyor.\n\nFynx Music'i tercih ettiğiniz için teşekkür ederiz.  <a:ucankalpler:735102535974780968>`) 
.setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music © 2020 - All right reserved.`, client.user.avatarURL())
message.channel.send(embed)
};

module.exports.config = {
    name: "durdur",
    aliases: ["dur"]
};
