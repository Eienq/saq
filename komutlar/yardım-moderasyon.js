const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Pirate Yardım Menüsü`)
.setColor('#ffd100')
.addField('Sunuzunuzu 7/24 Koruyun',`
<a:pirate:749380925619437619> ** | **__**${prefix}BAN**__ **| Kişiyi Yasaklar**
<a:pirate:749380925619437619> ** | **__**${prefix}UNBAN**__ **| Kişinin Banını Açar**
<a:pirate:749380925619437619> ** | **__**${prefix}MODLOG**__ **| Sunucunuzda Log Tuttar**
<a:pirate:749380925619437619> ** | **__**${prefix}BANSAY**__ **| Sunucuzdan Banlananlar**
<a:pirate:749380925619437619> ** | **__**${prefix}BANSORGU**__ **| Kişinin Neden Banlandığını Gösterir**
<a:pirate:749380925619437619> ** | **__**${prefix}SİL**__ **|  Kadar Mesaj Siler**
<a:pirate:749380925619437619> ** | **__**${prefix}SA-AS**__ **|Sa Yazan Kişilere Cevap Verir.**
<a:pirate:749380925619437619> ** | **__**${prefix}KÜFÜRENGEL**__ **|  Küfür Edilmesini Tamamen Yasaklar.**
<a:pirate:749380925619437619> ** | **__**${prefix}REKLAMENGEL**__ **| Reklam Yapılmasını Tamamen Yasaklar.**
<a:pirate:749380925619437619> ** | **__**${prefix}REKLAME-KİCK**__ **| Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler**
<a:pirate:749380925619437619> ** | **__**${prefix}YAVAŞMOD**__ **| Kanala Yazı Süre Limiti Koyar.**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.config = {
name: "moderasyon",
  aliases: []
}