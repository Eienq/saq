const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let batuhan = new Discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL())
.setAuthor(client.user.username, client.user.avatarURL)
.addField("Bot Verileri", `<a:pirate:749380925619437619> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:pirate:749380925619437619> Toplam kullanıcı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \nToplam kanal: **${client.channels.cache.size}**`)
.addField("Bot Geliştiricisi", `Bot geliştiricisi ➡ <@424512092742352897> | **' ֎Batuhan#0008** \n Bot geliştiricisi ➡ <@618860034499149859> | **' Miran#0139**`)
.addField("Sürümler", `Discord.js sürümü: **v${Discord.version}** \nNode.js sürümü: **${process.version}**`)
.addField("Gecikmeler", `Bot pingi: **${client.ws.ping}** \nMesaj gecikmesi: **${new Date().getTime() - message.createdTimestamp}**`)

.setTimestamp()
.setColor("RANDOM")
message.channel.send(batuhan)
}

exports.config = {
name: "i",
  aliases: []
}