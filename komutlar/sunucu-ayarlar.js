const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 
  
const embed = new Discord.MessageEmbed()
.setTitle(message.guild.name + " | Sunucu Ayarları «")
.setColor("BLUE")
.addField(`Küfür Engelleme`, `${db.has(`küfür_${message.channel.id}`) ? `${client.emojis.cache.get("749719203912876214")} Aktif` : `${client.emojis.cache.get("749719275580817603")} De-Aktif `}`)
.addField(`Reklam Engelleme`, `${db.has(`reklamengel_${message.channel.id}`) ? `${client.emojis.cache.get("749719203912876214")} Aktif` : `${client.emojis.cache.get("749719275580817603")} De-Aktif `}`)
message.channel.send(embed)
};
exports.config = {
  name: "ayarlar", 
  aliases: []
}; 
