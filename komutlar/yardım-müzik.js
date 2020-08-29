const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Pirate Yardım Menüsü`)
.setColor('#ffd100')
.addField('Sunucunuzda Parti Düzenleyin',`
<a:pirate:749380925619437619> ** | **__**${prefix}OYNAT**__ **| Şarkı Oynatır**
<a:pirate:749380925619437619> ** | **__**${prefix}DURAKLAT**__ **| Şarkıyı Durdurur**
<a:pirate:749380925619437619> ** | **__**${prefix}DEVAM**__ **| Duran Şarkıyı Devam Ettirir**
<a:pirate:749380925619437619> ** | **__**${prefix}DURAKLAT**__ **| Şarkıyı Durdurur**
<a:pirate:749380925619437619> ** | **__**${prefix}ATLA**__ **| Şarkı Atlar**
<a:pirate:749380925619437619> ** | **__**${prefix}DURDUR**__ **| Şarkıyı Kapatır ve Bot Çıkar**
<a:pirate:749380925619437619> ** | **__**${prefix}KUYRUK**__ **| Sıradaki Şarkıları Gösterir**
<a:pirate:749380925619437619> ** | **__**${prefix}DÖNGÜ**__ **| Şarkıyı Döngüye Sokar**
<a:pirate:749380925619437619> ** | **__**${prefix}SES**__ **| Ses Seviyesini Ayarlar**
<a:pirate:749380925619437619> ** | **__**${prefix}KUYRUK-TEMİZLE**__ **| Kuyruğu Temizler**
<a:pirate:749380925619437619> ** | **__**${prefix}RANDOM**__ **| Kuyruktaki Müzikleri Karıştırır**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.config = {
name: "müzik",
  aliases: []
}