 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  const fynxdblapi = require('dblapi.js')
const fynxdbl = new fynxdblapi(fynx.dbltoken, client) 
fynxdbl.hasVoted(message.author.id).then(fynxoyverdi => {
      if(fynxoyverdi)  {
        
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Pirate Koruma Komutları`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:750076071721828452> Pirate botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__YAKINDA__`,`<a:setting:750076062716788807> Bu Komut Çok Yakında Eklenecektir.`)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:750076071721828452> \`${prefix}davet\` | Pirate'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://i.hizliresim.com/Y7jFCB.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
             } else {
        message.channel.send("Bu komutu kullanabilmek için bota oy vermeniz gerekmektedir. Bota oy verebilmek için https://discordbots.org/bot/713713727794446397/vote sitesini ziyaret edebilirsiniz. | Oy verdiyseniz 3 dakika beklemeniz gerekmektedir.")
      }
  })
  };
exports.config = {
name: "guard",
  aliases: []
}

