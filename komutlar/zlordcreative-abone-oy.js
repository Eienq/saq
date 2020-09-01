  
const Discord = require("discord.js");
const client = new Discord.Client();
const fynx = require("../ayarlar/bot.json");
exports.run = (client, message) => {
  const fynxdblapi = require('dblapi.js')
const fynxdbl = new fynxdblapi(fynx.dbltoken, client) 
fynxdbl.hasVoted(message.author.id).then(fynxoyverdi => {
      if(!fynxoyverdi)  {
            message.reply("<a:hypesquad1:750076071721828452> **Galeri Erişimi Rölünü Almak İçin Top.gg Üzerinden Oy Vermen Gerekiyor**\n**Oy vermek için;**\n > https://top.gg/bot/713713727794446397 | Eğer oy verdiyseniz __3__ dakika bekleyiniz.") //OY LINKI!

        } else {
            message.channel.send("<a:hypesquad1:750076071721828452> **Galeri Erişimin Açılmıştır Ekran Görüntünü Attabilirsin**");
            message.member.roles.add("744517159123681370")  

        }
    })
}
exports.config = {
  name: "js",
  aliases: ["JavaScript"]
};
