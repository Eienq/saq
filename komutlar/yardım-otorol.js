 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Oto Rol Menüsü`)
.setColor('#ffd100')
.addField('Pirate Botu Eklemeyi Unutma',`
<a:pirate:749380925619437619> ** | **__**${prefix}OTOROL-AYARLA**__ **| Sunucunuzda Otorol Ayarlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}OTOROL-KAPAT**__ **| Sunucunuzdaki Otorol'ü Kapatır.**
<a:pirate:749380925619437619> ** | **__**${prefix}OTOROL-MESAJ**__ **| Sunucunuzdaki Otorol'ün Mesajını Ayarlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}OTOROL-MESAJ-SIFIRLA**__ **| Sunucunuzdaki Otorol'ün Mesajını Sıfırlar.**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otorol",
  aliases: []
}

const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pirate Oto Cevap Komutları`, client.user.avatarURL())
.setDescription(`<a:pirate:749380925619437619> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Cevap Ekle__`,`<a:ayar:750021160237793311> \`${prefix}otorol-ayarla\` Sunucunuza Özel Komut Eklemenize Yarar.`,true)
.addField(`__Oto Cevap Liste__`,`<a:ayar:750021160237793311> \`${prefix}otocevap-liste\` Sunucunuzdaki Özel Komutların Listesini Gösterir.`,true)
.addField(`__Oto Cevap Sil__`,`<a:ayar:750021160237793311> \`${prefix}otocevap-sil\` unucunuzdaki Özel Komutu Siler.`,true)
.addField(`__Bilgilendirme__`,`<a:pirate:749380925619437619> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:pirate:749380925619437619> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:pirate:749380925619437619> \`${prefix}ayarlar\` | Sunucunuzda Açık veya Kapalı Olan Komutları Liste Şeklinde Gösterir`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otocevap",
  aliases: []
}
