const db = require("quick.db");
const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Pirate Yardım Menüsü`)
.setColor('#ffd100')
.addField('Pirate Botu Eklemeyi Unutma',`
<a:pirate:749380925619437619> ** | **__**${prefix}GENEL**__ **| Genel Komutları**
<a:pirate:749380925619437619> ** | **__**${prefix}MODERASYON**__ **| Moderasyon Komutları**
<a:pirate:749380925619437619> ** | **__**${prefix}EKLENTİ**__ **| Eklenti Komutları**
<a:pirate:749380925619437619> ** | **__**${prefix}MÜZİK**__ **| Müzik Komutları**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.config = {
name: "yardım",
aliases: ["help", "yardım"]
}