
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
.addField(`__Ban__`,`<a:ayar:750021160237793311> ${prefix}ban Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`)
.addField(`__Kick__`,`<a:ayar:750021160237793311> ${prefix}kick Sunucunuzda Belirtiğiniz Kişiyi Kickler`)
.addField(`__Ban Kaldırma__`,`<a:ayar:750021160237793311> ${prefix}unban yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`)
.addField(`__Mod Log__`,`<a:ayar:750021160237793311> ${prefix}modlog Sunucunuzda Moderasyon Kayıt Logununu Tuttar`)
.addField(`__Ban Say__`,`<a:ayar:750021160237793311> ${prefix}bansay Sunucunuzdan Kaç Kişi Ban Yemiş`)
.addField(`__Ban Sorgu__`,`<a:ayar:750021160237793311> ${prefix}bansorgu Kişinin Neden Banlandığını Gösterir`)
.addField(`__Küfür Engel__`,`<a:ayar:750021160237793311> ${prefix}küfürengel Küfür Edilmesini Tamamen Yasaklar.`)
.addField(`__Reklam Engel__`,`<a:ayar:750021160237793311> ${prefix}reklamengel Reklam Yapılmasını Tamamen Yasaklar.`)
.addField(`__Reklam Kick__`,`<a:ayar:750021160237793311> ${prefix}reklam-kick Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`)
.addField(`__Mesaj Temizleme__`,`<a:zil:749712956346073118> ${prefix}sil Belirtiğiniz Kadar Mesaj Siler`)
.addField(`__Yavaş Mod__`,`<a:zil:749712956346073118> ${prefix}yavaşmod Kanala Yazı Süre Limiti Koyar.`)
.addField(`__Sa-As__`,`<a:zil:749712956346073118> ${prefix}sa-as Sunucuzda Selam Verenlere Selam Der`)
.addField(`__Diğer Komutlar__`,`<a:pirate:749380925619437619> ${prefix}ayarlar = Sunucunuzdaki açık veya kapalı komutları gösterir.\n<a:pirate:749380925619437619> ${prefix}istek = Bot üzerinde bir istekte bulunmanızı sağlar.\n<a:pirate:749380925619437619> ${prefix}davet = Botu sunucunuza davet etmenizi sağlar.\n<a:pirate:749380925619437619> ${prefix}bot-hakkında = Botun genel bilgilerini gösterir.`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "moderasyon",
  aliases: []
}

