const Discord = require("discord.js")
const fs = require("fs")
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const seksizaman = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");
const istatistikler = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()
.setFooter("Pirate © 2020", client.user.avatarURL())
.addField("<a:pirate:749380925619437619> | **Botun Sahibi**", "<@236173144300191754> <@327064201245753344>")
.addField("<a:pirate:749380925619437619>   | **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
.replace("{ping1}", new Date().getTime() - message.createdTimestamp)
.replace("{ping2}", client.ws.ping),true)
.addField("<a:pirate:749380925619437619>   | **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
.addField("<a:pirate:749380925619437619>  | **Çalışma süresi**", seksizaman, true)
.addField("<a:pirate:749380925619437619>   | **Discord.JS sürüm**", "v" + Discord.version, true)
.addField("<a:pirate:749380925619437619>   | **Node.JS sürüm**", `${process.version}`, true)
.addField("<a:pirate:749380925619437619>   | **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
.addField(`<a:pirate:749380925619437619>  | **Sunucu Sayısı**`, client.guilds.cache.size, true)
.addField(`<a:pirate:749380925619437619>  | **Kullanıcı Sayısı**`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(`<a:pirate:749380925619437619>  | **Sunucu Lokasyonu**`, `<a:turkiye:734888652827656262>  Turkey, Izmir`, true)
return message.channel.send(istatistikler);
};

exports.config = {
name: "istatistik",
aliases: ["i"]
};

