


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://i.hizliresim.com/4Q3agT.jpg`)
.addField("__**Bot Verileri**__", `<a:pirate:749380925619437619> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:pirate:749380925619437619> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:pirate:749380925619437619> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:pirate:749380925619437619> **Bot Sahibi**  <@236173144300191754> **|** **Lord Creative#0001** \n <a:pirate:749380925619437619> **Bot geliştiricisi**  <@327064201245753344> **|** **Bay Ördekcik#0001**`)
.addField("__**Sürümler**__", `<a:pirate:749380925619437619> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:pirate:749380925619437619> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:pirate:749380925619437619> **Bot Gecikmesi** **|**  **${client.ws.ping}** \n <a:pirate:749380925619437619> **Mesaj Gecikmesi** **|** **${new Date().getTime() - message.createdTimestamp}**`)
.addField("<a:pirate:749380925619437619> **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
.setTimestamp()
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "i",
  aliases: []
}