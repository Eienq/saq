const Discord = require("discord.js");
const client = new Discord.Client();

const DBL = require("dblapi.js");
const dbl = new DBL('DBL TOKEN', client); 

exports.run = (client, message) => {
 dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`<a:pirate:749380925619437619> **Müzik Komutlarını Kullanmak İçin Botumuza Oy Vermelisin** https://top.gg/bot/713713727794446397/vote **|** **Eğer Oy Verdiyseniz 3 Dakika Bekleyin**`) 

   } else {
    let prefix = '-'
    let yardım = new Discord.MessageEmbed()  
    .setAuthor(`Pirate Eklenti Menüsü`)
    .setColor('#ffd100')
    .addField('Pirate Botunu Eklemek İsterseniz -davet',`
<a:pirate:749380925619437619> ** | **__**${prefix}OYNAT**__ **| Şarkı Oynatır**
<a:pirate:749380925619437619> ** | **__**${prefix}DURAKLAT**__ **| Şarkıyı Durdurur**
<a:pirate:749380925619437619> ** | **__**${prefix}DEVAM**__ **| Duran Şarkıyı Devam Ettirir**
<a:pirate:749380925619437619> ** | **__**${prefix}DURAKLAT**__ **| Şarkıyı Durdurur**
<a:pirate:749380925619437619> ** | **__**${prefix}ATLA**__ **| Şarkı Atlar**
<a:pirate:749380925619437619> ** | **__**${prefix}DURDUR**__ **| Şarkıyı Kapatır ve Bot Çıkar**
<a:pirate:749380925619437619> ** | **__**${prefix}KUYRUK**__ **| Sıradaki Şarkıları Gösterir**
<a:pirate:749380925619437619> ** | **__**${prefix}DÖNGÜ**__ **| Şarkıyı Döngüye Sokar**
<a:pirate:749380925619437619> ** | **__**${prefix}SES**__ **| Ses Seviyesini Ayarlar**
<a:pirate:749380925619437619> ** | **__**${prefix}KUYRUK-TEMİZLE**__ **| Kuyruğu Temizler**
<a:pirate:749380925619437619> ** | **__**${prefix}RANDOM**__ **| Kuyruktaki Müzikleri Karıştırır**`)
    .addField('Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8)`)
    .setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
    .setThumbnail(client.user.avatarURL)
     message.channel.send(yardım) 

}})};

exports.config = {
name: "müzik",
aliases: ["müzikkomutları"]
}
