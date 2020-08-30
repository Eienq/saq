const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Pirate Yardım Menüsü`)
.setColor('#ffd100')
.addField('Sunuzunuzu 7/24 Denetleyin',`
<a:pirate:749380925619437619> ** | **__**${prefix}SAYAÇ-AYARLA**__ **| Sunucunuzda Sayaç **
<a:pirate:749380925619437619> ** | **__**${prefix}UNBAN**__ **| Belirtiğiniz Kişinin Banını Açar**
<a:pirate:749380925619437619> ** | **__**${prefix}MODLOG**__ **| Sunucunuzda Log Tuttar**
<a:pirate:749380925619437619> ** | **__**${prefix}BANSAY**__ **| Sunucuzdan Banlananlar**
<a:pirate:749380925619437619> ** | **__**${prefix}BANSORGU**__ **| Kişinin Neden Banlandığını Gösterir**
<a:pirate:749380925619437619> ** | **__**${prefix}SİL**__ **| Belirtiğiniz Kadar Mesaj Siler**
<a:pirate:749380925619437619> ** | **__**${prefix}FORCEBAN**__ **| Sunucuda Olmayan Üyeleri ID İle Banlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}SOFTBAN**__ **| Etiketlediğiniz Kişinin Tüm Mesajlarını Silerek Banlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}SA-AS**__ **| Açıldığı Andan İtibaren Sa Yazan Kişilere Cevap Verir.**
<a:pirate:749380925619437619> ** | **__**${prefix}KÜFÜRENGEL**__ **| Sunucunuzda Küfür Edilmesini Tamamen Yasaklar.**
<a:pirate:749380925619437619> ** | **__**${prefix}REKLAMENGEL**__ **| Sunucunuzda Reklam Yapılmasını Tamamen Yasaklar.**
<a:pirate:749380925619437619> ** | **__**${prefix}YAVAŞMOD**__ **| Komutu Girdiğiniz Kanala Yazı Süre Limiti Koyar.**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.config = {
name: "eklenti",
  aliases: []
}