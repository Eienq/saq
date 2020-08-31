const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`<a:pirate:749380925619437619>  **Bunu mu Arıyorsun?** ${prefix}reklam-kick aç/kapat`)
    .setColor('#ffd100')
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`reklamkick_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`<a:pirate:749380925619437619>  **Reklam Kick Başarıyla Açıldı!**`)
    .setColor('#ffd100')
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`reklamkick_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`<a:pirate:749380925619437619>  **Reklam Kick Başarıyla Kapatıldı!**`)
       .setColor('#ffd100')
    .setTimestamp()
    return message.channel.send(sa)
  }
};
exports.config = {
  name: "reklam-kick",
  aliases: []
};
