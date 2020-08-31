
const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('DBL TOKEN', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.reply("<a:hypesquad1:750076071721828452> **Bu Komutu Kullanabilmek İçin Top.gg Üzerinden Oy Vermen Gerekiyor**\n**Oy vermek için;**\n > https://top.gg/bot/713713727794446397 | Eğer oy verdiyseniz __3__ dakika bekleyiniz.") //OY LINKI!

        } else {
            message.channel.send("<a:hypesquad1:750076071721828452> JavaScript Rolün Verildi");
            message.member.roles.add("729326539572772875")  

        }
    })
}
exports.config = {
  name: "js",
  aliases: ["JavaScript"]
};


