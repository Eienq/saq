const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pirate Müzik Komutları`, client.user.avatarURL())
.setDescription(`<a:pirate:749380925619437619> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Müzik Oynat__`,`<a:ayar:750021160237793311> \`${prefix}oynat\` İstediğiniz Şarkıyı Başlatır`,true)
.addField(`__Müziği Duraklat__`,`<a:ayar:750021160237793311> \`${prefix}duraklat\` Şarkıyı Durdurur`,true)
.addField(`__Müziği Devam Ettir__`,`<a:ayar:750021160237793311> \`${prefix}devam\` Şarkıyı Devam Ettirir`,true)
.addField(`__Müziği Geç__`,`<a:ayar:750021160237793311> \`${prefix}atla\` Şarkıyı Atlar`,true)
.addField(`__Müziği Durdur__`,`<a:ayar:750021160237793311> \`${prefix}durdur\` Şarkıyı Kapatıp Odadan Çıkar`,true)
.addField(`__Müzik Kuyruğu__`,`<a:ayar:750021160237793311> \`${prefix}kuyruk\` Şarkı Kuyruğunu Gösterir`,true)
.addField(`__Müzik Döngüsü__`,`<a:ayar:750021160237793311> \`${prefix}döngü\` Şarkıyı Döngüye Sokar`,true)
.addField(`__Ses Seviyesi__`,`<a:ayar:750021160237793311> \`${prefix}ses\` Ses Seviyesini Ayarlarsınız`,true)
.addField(`__Kuyruğu Temizle__`,`<a:ayar:750021160237793311> \`${prefix}kuyruk-temizle\` Kuyruk Listesini Temizler`,true)
.addField(`__Kuyruğu Karıştır__`,`<a:ayar:750021160237793311> \`${prefix}karıştır\` Kuyruktaki Şarkıları Karıştırır`,true)
.addField(`__Bilgilendirme__`,`<a:pirate:749380925619437619> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:pirate:749380925619437619> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:pirate:749380925619437619> \`${prefix}ayarlar\` | Sunucunuzda Açık veya Kapalı Olan Komutları Liste Şeklinde Gösterir`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzik",
  aliases: []
}
