const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Pirate Moderasyon Menüsü`)
.setColor('#ffd100')
.addField('Pirate Botu Eklemeyi Unutma',`
<a:pirate:749380925619437619> ** | **__**${prefix}SAYAÇ**__ **| Sayaç Sistemi Komutları**
<a:pirate:749380925619437619> ** | **__**${prefix}OTOROL**__ **| OtoRol Sistemi Komutları**
<a:pirate:749380925619437619> ** | **__**${prefix}BAN**__ **| Kişiyi Yasaklar**
<a:pirate:749380925619437619> ** | **__**${prefix}SOFT-BAN**__ **| Kullanıcının Mesajlarını Silip Banlar**
<a:pirate:749380925619437619> ** | **__**${prefix}FORCE-BAN**__ **| Kullanıcıyı İD İle Banlar**
<a:pirate:749380925619437619> ** | **__**${prefix}KİCK**__ **| Kişiyi Attar**
<a:pirate:749380925619437619> ** | **__**${prefix}UNBAN**__ **| Kişinin Banını Açar**
<a:pirate:749380925619437619> ** | **__**${prefix}MODLOG**__ **| Sunucunuzda Log Tuttar**
<a:pirate:749380925619437619> ** | **__**${prefix}BANSAY**__ **| Sunucuzdan Banlananlar**
<a:pirate:749380925619437619> ** | **__**${prefix}BANSORGU**__ **| Kişinin Neden Banlandığını Gösterir**
<a:pirate:749380925619437619> ** | **__**${prefix}KÜFÜRENGEL**__ **|  Küfür Edilmesini Tamamen Yasaklar.**
<a:pirate:749380925619437619> ** | **__**${prefix}REKLAMENGEL**__ **| Reklam Yapılmasını Tamamen Yasaklar.**
<a:pirate:749380925619437619> ** | **__**${prefix}REKLAM-KİCK**__ **| Kişiyi 3 Uyarıdan Sonra Kickler**
<a:pirate:749380925619437619> ** | **__**${prefix}SA-AS**__ **| Selam Sistemi**
<a:pirate:749380925619437619> ** | **__**${prefix}SİL**__ **| Belirtiğiniz Kadar Mesaj Siler**
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

 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100')
.addField(`Pirate # Komut Listesi`,`<a:pirate:749380925619437619> **Pirate'yi Eklemek İçin ${prefix}davet**`)
.addField(`__Sayaç__`,`<a:ayar:750021160237793311> ${prefix}sayaç Sunucunuza Sayaç Kurarsınız ve Anlık Bilgi Alırsınız`)
.addField(`__Otomatik Rol__`,`<a:ayar:750021160237793311> ${prefix}otorol Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`)
.addField(`__Ban__`,`<a:ayar:750021160237793311> ${prefix}ban-limit yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Kick__`,`<a:ayar:750021160237793311> ${prefix}ban-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Ban Kaldırma__`,`<a:ayar:750021160237793311> ${prefix}kanal-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Rol Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}rol-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Rol Yetki Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}yetki-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Emoji Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}emoji-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Küfür Engel Sistemi__`,`<a:ayar:750021160237793311> ${prefix}küfür-engel yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Büyük Harf Engel Sistemi__`,`<a:ayar:750021160237793311> ${prefix}capslock-engel yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Reklam Engel Sistemi__`,`<a:ayar:750021160237793311> ${prefix}reklam-engel yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Sunucu Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}sunucu-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Anti Guard Sistemi__`,`<a:zil:749712956346073118> ${prefix}guard-rol = Anti Guard Sistemi ile sunucunuzda koruma komutlarını kullansa dahi bu komutlardan etkilenmeyecek rolü ayarlarsınız.`)
.addField(`__Diğer Komutlar__`,`<a:pirate:749380925619437619> ${prefix}ayarlar = Sunucunuzdaki açık veya kapalı komutları gösterir.\n<a:pirate:749380925619437619> ${prefix}istek = Bot üzerinde bir istekte bulunmanızı sağlar.\n<a:pirate:749380925619437619> ${prefix}davet = Botu sunucunuza davet etmenizi sağlar.\n<a:pirate:749380925619437619> ${prefix}bot-hakkında = Botun genel bilgilerini gösterir.`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "deneme",
  aliases: []
}

ney karıştı?