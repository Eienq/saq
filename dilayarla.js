const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";
const db = require("quick.db")
const ayarlar = require("../ayarlar/bot.json")
exports.run = async function(client, message, args) {

  const seceneksiz = new Discord.MessageEmbed()
  .setColor(FynxHata)
  .setTitle("• Hata: 005 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`<a:yanlis:734892943332212764>  | Fynx Music'in dilini ayarlayabilmek için bir dil belirtiniz.\nMevcut Diller: \`Türkçe\`, \`English\`To be able to set the language of Fynx Music, you must specify a language. Available languages:`)
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());  
  
let dil = await db.fetch(`dil_${message.guild.id}`);
const secenek = args[0]
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`/**SUNUCUYU-YONET**/ yetkin yok.`)
if(!secenek) return message.channel.send(seceneksiz)

if(secenek == 'tr' || "TR" || "Turkish" || "Türk"|| "türk" || "türkçe" || "Türkçe"){
db.set(`dil_${message.guild.id}`, 'TR')
message.channel.send('Botun Dili Turkce Olarak Kaydedildi!')
}

if(secenek == 'EN' || "en" || "English" || "english"){
db.set(`dil_${message.guild.id}`, 'EN')
message.channel.send('Botun Dili Ingilizce Olarak Kaydedildi!')
}   
if(secenek == 'sıfırla'){
db.delete(`dil_${message.guild.id}`)
message.channel.send('Botun Dili Sifirlandi!')
}    
};
module.exports.conf = {
  name: "dil",
  aliases: ["lang", "language", "dil-ayarla"]
};
