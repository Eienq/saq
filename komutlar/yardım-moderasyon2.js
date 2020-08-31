const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Pirate Moderasyon 2 Menüsü`)
.setColor('#ffd100')
.addField('Pirate Botu Eklemeyi Unutma',`
<a:pirate:749380925619437619> ** | **__**${prefix}SOFT-BAN**__ **| Kullanıcının Mesajlarını Silip Banlar**
<a:pirate:749380925619437619> ** | **__**${prefix}FORCE-BAN**__ **| Kullanıcıyı İD İle Banlar**
<a:pirate:749380925619437619> ** | **__**${prefix}SA-AS**__ **| Selam Sistemi**
<a:pirate:749380925619437619> ** | **__**${prefix}SİL**__ **| Belirtiğiniz Kadar Mesaj Siler**
<a:pirate:749380925619437619> ** | **__**${prefix}YAVAŞMOD**__ **| Kanala Yazı Süre Limiti Koyar.**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.config = {
name: "moderasyon2",
  aliases: []
}