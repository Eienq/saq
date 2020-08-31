 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Yardım Menüsü`)
.setColor('#ffd100')
.addField('Pirate Botu Eklemek İçin ${prefix}davet',`
<a:pirate:749380925619437619> ** | **__**${prefix}DAVET-KANAL**__ **| Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Ayarlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}DAVET-KANAL-SIFIRLA**__ **| Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Sıfırlar.**
<a:pirate:749380925619437619> ** | **__**${prefix}DAVET-EKLE**__ **| Etiketlediğiniz Kişinin Davet Sayısını Arttırır.**
<a:pirate:749380925619437619> ** | **__**${prefix}DAVETLERİM**__ **| Sunucuda Kaç Davetiniz Olduğunu Gösterir.**
<a:pirate:749380925619437619> ** | **__**${prefix}DAVET-RÜTBE-EKLE**__ **| Sunucunuzda Davet Sayısına Göre Rol Verme Sistemine Rol Ekler.**
<a:pirate:749380925619437619> ** | **__**${prefix}DAVET-RÜTBE-SİL**__ **| Sunucunuzda Davet Sayısına Göre Rol Verme Sisteminden Rol Siler.**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
  .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "davetsistemi",
  aliases: []
}