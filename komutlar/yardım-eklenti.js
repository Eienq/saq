 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Yardım Menüsü`)
.setColor('#ffd100')
.addField('Sunuzunuzu 7/24 Denetleyin',`
<a:pirate:749380925619437619> ** | **__**${prefix}SAYAÇ-AYARLA**__ **| Sunucunuzda Sayaç Ayarlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}SAYAÇ-HG-MESAJ**__ **| Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}SAYAÇ-BB-MESAJ**__ **| Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "eklenti",
  aliases: []
}