
 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pirate Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`<a:pirate:749380925619437619> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç__`,`<a:ayar:750021160237793311> \`${prefix}sayaç\` Sunucunuza Sayaç Kurarsınız ve Anlık Bilgi Alırsınız`,true)
.addField(`__Otomatik Rol__`,`<a:ayar:750021160237793311> \`${prefix}otorol\` Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`,true)
.addField(`__Ban__`,`<a:ayar:750021160237793311> \`${prefix}ban\` Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`,true)
.addField(`__Kick__`,`<a:ayar:750021160237793311> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler`,true)
.addField(`__Ban Kaldırma__`,`<a:ayar:750021160237793311> \`${prefix}unban\` yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:ayar:750021160237793311> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıt Logununu Tuttar`,true)
.addField(`__Ban Say__`,`<a:ayar:750021160237793311> \`${prefix}bansay\` Sunucunuzdan Kaç Kişi Ban Yemiş`,true)
.addField(`__Ban Sorgu__`,`<a:ayar:750021160237793311> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Gösterir`,true)
.addField(`__Küfür Engel__`,`<a:ayar:750021160237793311> \`${prefix}küfürengel\` Küfür Edilmesini Tamamen Yasaklar.`,true)
.addField(`__Reklam Engel__`,`<a:ayar:750021160237793311> \`${prefix}reklamengel\` Reklam Yapılmasını Tamamen Yasaklar.`,true)
.addField(`__Reklam Kick__`,`<a:ayar:750021160237793311> \`${prefix}reklam-kick\` Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`,true)
.addField(`__Mesaj Temizleme__`,`<a:ayar:750021160237793311> \`${prefix}sil\` Belirtiğiniz Kadar Mesaj Siler`,true)
.addField(`__Yavaş Mod__`,`<a:ayar:750021160237793311> \`${prefix}yavaşmod\` Kanala Yazı Süre Limiti Koyar.`,true)
.addField(`__Sa-As__`,`<a:ayar:750021160237793311> \`${prefix}sa-as\` Sunucuzda Selam Verenlere Selam Der`,true)
.addField(`__Bilgilendirme__`,`<a:pirate:749380925619437619> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:pirate:749380925619437619> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:pirate:749380925619437619> \`${prefix}ayarlar\` | Sunucunuzda Açık veya Kapalı Olan Komutları Liste Şeklinde Gösterir`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "mod",
  aliases: []
}
