
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pirate Genel Komutlar`, client.user.avatarURL())
.setDescription(`<a:pirate:749380925619437619> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<a:ayar:750021160237793311> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:ayar:750021160237793311> \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:ayar:750021160237793311> \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Profil__`,`<a:ayar:750021160237793311> \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:ayar:750021160237793311> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:ayar:750021160237793311> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:pirate:749380925619437619> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:pirate:749380925619437619> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:pirate:749380925619437619> \`${prefix}ayarlar\` | Sunucunuzda Açık veya Kapalı Olan Komutları Liste Şeklinde Gösterir`)
.setImage(`https://i.hizliresim.com/vXF8aN.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
