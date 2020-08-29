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
  .setTitle("• Hata: 015 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`**__Türkçe__**\n<a:yanlis:734892943332212764>  | Fynx Music'in dilini ayarlayabilmek için bir dil belirtiniz.\nMevcut Diller: \`Türkçe\`, \`English\`\n\n**__English:__**\n<a:yanlis:734892943332212764>  | To be able to set the language of Fynx Music, you must specify a language.\nAvailable languages:\`English\`, \`Turkish\` `)
.setFooter(`Fynx Music - All right reserved.`, client.user.avatarURL());  
  
let dil = await db.fetch(`dil_${message.guild.id}`);
const secenek = args[0]
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`/**SUNUCUYU-YONET**/ yetkin yok.`)
if(!secenek) return message.channel.send(seceneksiz)

if(secenek == 'tr' || "TR" || "Turkish" || "Türk"|| "türk" || "türkçe" || "Türkçe"){
db.set(`dil_${message.guild.id}`, 'turkce')
message.channel.send(`Fynx Music'in dili başarılı bir şekilde \`Türkçe\` olarak ayarlandı!`)
}

if(secenek == 'EN' || "en" || "English" || "english"){
db.set(`dil_${message.guild.id}`, 'english')
message.channel.send(`Fynx Music's language has been successfully set to \`English\`!`)
}   
if(secenek == 'sıfırla'){
db.delete(`dil_${message.guild.id}`)
message.channel.send(`Fynx Music'in dili başarılı bir şekilde sıfırlandı!`)
}  

  if(secenek == 'reset'){
db.delete(`dil_${message.guild.id}`)
message.channel.send(`Fynx Music's language has been successfully reset!`)
}    
};
exports.config = {
  name: "dil",
  aliases: ["lang", "language", "dil-ayarla"]
};
