 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Genel Komutlar`)
.setColor('#ffd100')
.addField('Pirate Botu Eklemeyi Unutma',`
<a:pirate:749380925619437619> ** | **__**${prefix}KOMUTLAR**__ **| Botun Komut Sayısını Gösterir**
<a:pirate:749380925619437619> ** | **__**${prefix}PREFİX**__ **| Ayarlanabilir Prefix**
<a:pirate:749380925619437619> ** | **__**${prefix}DAVET**__ **| Botun Bağlantıları**
<a:pirate:749380925619437619> ** | **__**${prefix}BOTBİLGİ**__ **| Botun istatistikleri  **
<a:pirate:749380925619437619> ** | **__**${prefix}PROFİL**__ **| Profilinizi Gösterir**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}