 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Sayaç Komutları`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:pirate:749380925619437619> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Genel Komutlar__`,`<a:ayar:750021160237793311> \`${prefix}genel\`Komutlar`,true)
.addField(`__Mod Komutları__`,`<a:ayar:750021160237793311> \`${prefix}moderasyon\` Komutları`,true)
.addField(`__Müzik Komutları__`,`<a:ayar:750021160237793311> \`${prefix}müzik\` Komutları`,true)
.addField(`__Eklenti Komutları__`,`<a:ayar:750021160237793311> \`${prefix}eklenti\`  Komutları`,true)
.addField(`__Prefix Değiştir__`,`<a:ayar:750021160237793311> \`${prefix}prefix\`  Prefixi Değiştirin.`,true)
.addField(`__Bilgilendirme__`,`<a:pirate:749380925619437619> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:pirate:749380925619437619> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:pirate:749380925619437619> \`${prefix}ayarlar\` | Sunucunuzda Açık veya Kapalı Olan Komutları Liste Şeklinde Gösterir`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}