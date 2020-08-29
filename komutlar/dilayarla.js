const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";
const db = require("quick.db")
const ayarlar = require("../ayarlar/bot.json")
exports.run = async function(client, message, args) {

  const seceneksiz = new Discord.MessageEmbed()
  .setColor(AloneHata)
  .setTitle("• Hata/Error: 015 •")
.setThumbnail(message.author.avatarURL())
.setDescription(`**__Türkçe__**\n<a:yanlis:734892943332212764>  | Alone Music'in dilini ayarlayabilmek için bir dil belirtiniz.\nMevcut Diller: \`TR\`, \`EN\`\n\n**__English:__**\n<a:yanlis:734892943332212764>  | To be able to set the language of Alone Music, you must specify a language.\nAvailable languages:\`EN\`, \`TR\` `)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());  
  
let dil = await db.fetch(`dil_${message.guild.id}`);
const secenek = args[0]
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send()
if(!secenek) return message.channel.send(seceneksiz)

if(secenek == 'TR'){
db.set(`dil_${message.guild.id}`, 'turkce')
message.channel.send(`Alone Music'in dili başarılı bir şekilde \`Türkçe\` olarak ayarlandı!`)
}

if(secenek == 'EN'){
db.set(`dil_${message.guild.id}`, 'english')
message.channel.send(`Alone Music's language has been successfully set to \`English\`!`)
}   
if(secenek == 'sıfırla'){
db.delete(`dil_${message.guild.id}`)
message.channel.send(`Alone Music'in dili başarılı bir şekilde sıfırlandı!`)
}  

  if(secenek == 'reset'){
db.delete(`dil_${message.guild.id}`)
message.channel.send(`Alone Music's language has been successfully reset!`)
}    
};
exports.config = {
  name: "dil",
  aliases: ["lang", "language", "dil-ayarla"]
};
