


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", `<a:hypesquad1:750076071721828452> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad1:750076071721828452> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad1:750076071721828452> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:hypesquad1:750076071721828452> **Bot Sahibi**  <@236173144300191754> **|** **Lord Creative#0001** \n <a:hypesquad1:750076071721828452> **Bot Geliştiricisi**  <@327064201245753344> **|** **Bay Ördekcik#0001** \n <a:hypesquad1:750076071721828452> **Bot Sahibi**  <@585579647132106765> **|** **Benz#8000** \n <a:hypesquad1:750076071721828452> **Bot Sahibi**  <@749710702721106020> **|** **Xir9999** \n`)
.addField("__**Sürümler**__", `<a:hypesquad1:750076071721828452> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad1:750076071721828452> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypesquad1:750076071721828452> **Bot Gecikmesi** **|**  **${client.ws.ping}** \n <a:hypesquad1:750076071721828452> **Mesaj Gecikmesi** **|** **${new Date().getTime() - message.createdTimestamp}**`)
.addField("<a:hypesquad1:750076071721828452> **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
.setTimestamp()
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}