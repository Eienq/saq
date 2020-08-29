const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Pirate Yardım Menüsü`)
.setColor('#ffd100')
.addField('Sunucununuz Artık  Pirate ile 7/24 Güvenli',`
<a:pirate:749380925619437619> ** | **__**-SUNUCU**__ **| Sunucu Komutları**
<a:pirate:749380925619437619> ** | **__**-SUNUCU**__ **| Sunucu Komutları**
<a:pirate:749380925619437619> ** | **__**-SUNUCU**__ **| Sunucu Komutları**`)
.addField('<a:pirate:749380925619437619> | Pirate Bot',`  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397) **|**  [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=713713727794446397&scope=bot&permissions=8) **|** [Destek](https://discord.gg/HRC9Yyp)`)
.setImage(`https://i.hizliresim.com/4Q3agT.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.config = {
name: "yardım",
aliases: ["help", "yardım"]
}