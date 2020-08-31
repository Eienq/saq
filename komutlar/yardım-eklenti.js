
const Discord = require("discord.js");
const client = new Discord.Client();

const DBL = require("dblapi.js");
const dbl = new DBL('DBL TOKEN', client); 

exports.run = (client, message) => {
 dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`**Eklenti Komutlarını Kullanmak İçin Botumuza Oy Vermelisin** https://top.gg/bot/713713727794446397/vote **|** **Eğer Oy Verdiyseniz 3 Dakika Bekleyin**`) 

   } else {
    let prefix = '-'
    let yardım = new Discord.MessageEmbed()  
    .setAuthor(`Pirate Eklenti Menüsü`)
    .setColor('#ffd100')
    .addField('Pirate Botunu Eklemek İsterseniz -davet',`
<a:pirate:749380925619437619> ** | **__**${prefix}KAYITSİSTEMİ**__ **| Kayıt Sistemi**
<a:pirate:749380925619437619> ** | **__**${prefix}DAVETSİSTEMİ**__ **| Davet Sistemi**`)
    .addField('Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8)`)
    .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
    .setThumbnail(client.user.avatarURL)
     message.channel.send(yardım) 

}})};

exports.config = {
name: "eklenti",
aliases: ["eklenti"]
}



const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Pirate Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:pirate:749380925619437619> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kayıt Sistemi__`,`<a:ayar:750021160237793311> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`____`,`<a:ayar:750021160237793311> \`${prefix}prefix\` Sunucuya Özel Prefix Ayarlarsınız`,true)
.addField(`__Bilgilendirme__`,`<a:pirate:749380925619437619> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:pirate:749380925619437619> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:pirate:749380925619437619> \`${prefix}ayarlar\` | Sunucunuzda Açık veya Kapalı Olan Komutları Liste Şeklinde Gösterir`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
