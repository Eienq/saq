 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Kayıt Sistemi`)
.setColor('#ffd100')
.addField('Pirate Botu Eklemeyi Unutma',`
<a:pirate:749380925619437619> ** | **__**${prefix}KAYIT-KANAL-AYARLA**__ **| Kayıt Ol Komutunun Kullanılacağı Kanalı Belirler.**
<a:pirate:749380925619437619> ** | **__**${prefix}KAYIT-LOG-KANAL-AYARLA**__ **| Kayıt Ol Komutunun Denetim Kaydı Kanalını Belirler.**
<a:pirate:749380925619437619> ** | **__**${prefix}KAYIT-OL**__ **| Kayıt Kanalında Kayıt Olmanızı Sağlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}KAYIT-VERİLECEK-ROL-AYARLA**__ **| Kayıt Ol Komutunu Kullandıktan Sonra Verilecek Rolü Belirler.**
<a:pirate:749380925619437619> ** | **__**${prefix}KAYIT-ALINACAK-ROL-AYARLA**__ **| Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler.**
<a:pirate:749380925619437619> ** | **__**${prefix}GİRİŞ-SİSTEMİ**__ **| Kayıt Kanalına Atılacak Mesajı Ayarlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}İSİM-SİSTEM**__ **| Kayıt Ol Komutunu Kullandıktan Sonra Verilecek İsmi Belirler.**
<a:pirate:749380925619437619> ** | **__**${prefix}KAYIT-SİSTEMİ-KAPAT**__ **| Kayıt Sistemini Tamamen Kapatır.**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "kayıtsistemi",
  aliases: []
}

const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pirate Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:pirate:749380925619437619> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kanal Ayarla__`,`<a:ayar:750021160237793311> \`${prefix}kayıt-kanal-ayarla\` Kayıt Ol Komutunun Kullanılacağı Kanalı Belirler`,true)
.addField(`__Kayıt Log__`,`<a:ayar:750021160237793311> \`${prefix}kayıt-log-kanal-ayarla\` Kayıt Ol Komutunun Denetim Kaydı Kanalını Belirler`,true)
.addField(`__Kayıt Ol_`,`<a:ayar:750021160237793311> \`${prefix}kayıt-ol\`  Kayıt Kanalında Kayıt Olmanızı Sağlar`,true)
.addField(`__Verilecek Rol_`,`<a:ayar:750021160237793311> \`${prefix}kayıt-verilecek-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek Rolü Belirler`,true)
.addField(`__Alınacak Rol_`,`<a:ayar:750021160237793311> \`${prefix}kayıt-alınacak-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`,true)
.addField(`__Alınacak Rol_`,`<a:ayar:750021160237793311> \`${prefix}kayıt-alınacak-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`,true)
.ad.addField(`__Alınacak Rol_`,`<a:ayar:750021160237793311> \`${prefix}kayıt-alınacak-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`,true)dField(`__Bilgilendirme__`,`<a:pirate:749380925619437619> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:pirate:749380925619437619> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:pirate:749380925619437619> \`${prefix}ayarlar\` | Sunucunuzda Açık veya Kapalı Olan Komutları Liste Şeklinde Gösterir`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "eklenti",
  aliases: []
}
