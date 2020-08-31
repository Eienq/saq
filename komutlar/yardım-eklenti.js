
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
<a:pirate:749380925619437619> ** | **__**${prefix}KAYITSİSTEMİ**__ **|Kayıt Sistemi**
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
