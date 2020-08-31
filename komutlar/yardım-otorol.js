const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pirate Oto Cevap Komutları`, client.user.avatarURL())
.setDescription(`<a:pirate:749380925619437619> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Rol Ayarla__`,`<a:ayar:750021160237793311> \`${prefix}otorol-ayarla\` Sunucunuzda Otorol Ayarlar.`,true)
.addField(`__Oto Rol Kapat__`,`<a:ayar:750021160237793311> \`${prefix}otorol-kapat\` Sunucunuzdaki Otorol'ü Kapatır.`,true)
.addField(`__Oto Rol Mesaj__`,`<a:ayar:750021160237793311> \`${prefix}otorol-mesaj\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Oto Rol Mesaj Sıfırla_`,`<a:ayar:750021160237793311> \`${prefix}otorol-mesaj-sıfırla\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<a:pirate:749380925619437619> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:pirate:749380925619437619> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:pirate:749380925619437619> \`${prefix}ayarlar\` | Sunucunuzda Açık veya Kapalı Olan Komutları Liste Şeklinde Gösterir`)
.setImage(`https://i.hizliresim.com/Y7jFCB.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otorol",
  aliases: []
}
