 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Sayaç Menüsü`)
.setColor('#ffd100')
.addField(`Vispo Guard # Komut Listesi`,`Sunucununuz artık yeni nesil bot olan Vispo Guard ile 7/24 güvenli.`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "deneme",
  aliases: []
}

.addField(`__Anti Guard Sistemi__`,`<a:ayar:750021160237793311> ${prefix}guard-rol yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Bot Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}anti-raid yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Ban Limit Sistemi__`,`<a:ayar:750021160237793311> ${prefix}ban-limit yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Sağ Tık Ban Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}ban-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Kanal Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}kanal-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Rol Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}rol-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Rol Yetki Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}yetki-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Emoji Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}emoji-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Küfür Engel Sistemi__`,`<a:ayar:750021160237793311> ${prefix}küfür-engel yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Büyük Harf Engel Sistemi__`,`<a:ayar:750021160237793311> ${prefix}capslock-engel yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Reklam Engel Sistemi__`,`<a:ayar:750021160237793311> ${prefix}reklam-engel yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Sunucu Koruma Sistemi__`,`<a:ayar:750021160237793311> ${prefix}sunucu-koruma yazarak kapsamlı bilgi elde edebilirsiniz.`)
.addField(`__Anti Guard Sistemi__`,`<a:zil:749712956346073118> ${prefix}guard-rol = Anti Guard Sistemi ile sunucunuzda koruma komutlarını kullansa dahi bu komutlardan etkilenmeyecek rolü ayarlarsınız.`)
.addField(`__Diğer Komutlar__`,`:visposekilv2: ${prefix}ayarlar = Sunucunuzdaki açık veya kapalı komutları gösterir.\n:visposekilv2: ${prefix}istek = Bot üzerinde bir istekte bulunmanızı sağlar.\n:visposekilv2: ${prefix}davet = Botu sunucunuza davet etmenizi sağlar.\n:visposekilv2: ${prefix}bot-hakkında = Botun genel bilgilerini gösterir.`)