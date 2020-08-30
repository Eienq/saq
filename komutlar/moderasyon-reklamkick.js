const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar/bot.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`<a:pirate:749380925619437619>  **Bunu mu Arıyorsun?** ${prefix}reklam-kick aç/kapat`)
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`reklamkick_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`<a:pirate:749380925619437619>  **Reklam Kick Başarıyla Açıldı!**`)
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`reklamkick_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`<a:pirate:749380925619437619>  **Reklam Kick Başarıyla Kapatıldı!**`)
    .setTimestamp()
    return message.channel.send(sa)
  }
};
exports.config = {
  name: "reklamkick",
  aliases: []
};
