const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const fynx = require("./ayarlar/bot.json"); 
const { Player } = require("discord-player"); 
const db = require('quick.db');

const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";


//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const emmmmbed = new Discord.MessageEmbed()
.setThumbnail()
.addField(`Pirate | Teşekkürler`, `**Selamlar, Ben Lord Craetive (Pirate'nin Geliştiricisi) Öncelikle Botumuzu Eklediğiniz ve Bize Destek Olduğunuz İçin Sizlere Teşekkürlerimi Sunarım**`)
.addField(`Alone | Prefix`, `**Pirate Botun Prefixi(ön eki) = \`${fynx.prefix}\`\n\n Değiştirebilmek için \`${fynx.prefix}prefix\` Yazabilirsiniz.**`)
.addField(`Pirate | Nasıl Kullanılır?`, `**Pirate botun tüm özelliklerinden yararlanabilmek için sadece \`${fynx.prefix}yardım\` yazmanız yeterlidir.**`)
.addField(`Pirate | Linkler`, `**Sohbet Kanalına -davet Yazmanız Yeterlidir**`)
.setFooter(`Alone Music © 2020`)
.setTimestamp();


client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(emmmmbed)

});

//----------------------------------------------------------------\\


const player = new Player(client, fynx.youtube_api);
client.player = player;

//----------------------------------------------\\

client.on("message", async message => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
const messageArray = message.content.split(" ");
const cmd = messageArray[0].toLowerCase();
const args = messageArray.slice(1);
if (!message.content.startsWith(prefix)) return;
const commandfile =
client.commands.get(cmd.slice(prefix.length)) ||
client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
if (commandfile) commandfile.run(client, message, args);
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
const jsfiles = files.filter(f => f.split(".").pop() === "js");
if (jsfiles.length <= 0) {
return console.log("Herhangi bir komut bulunamadı!");
}
jsfiles.forEach(file => {
console.log(`Yüklenen Komut: ${file}`);
const command = require(`./komutlar/${file}`);
client.commands.set(command.config.name, command);
command.config.aliases.forEach(alias => {
client.aliases.set(alias, command.config.name);
});
});
});

//-------------Kendini Sağirlaştirma Komutu ---------------\\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});
//---------------------------------------------------------\\


client.login(fynx.fynxtoken)
.then(function() {
console.log('Token doğru. Bot aktif ediliyor.')
}, function(err) {
console.log("Tokeniniz yanlış. Bot başlatılamıyor.")
setInterval(function() {
process.exit(0)
}, 20000);
})

//------------------Değişen Oynuyor---------------------------\\

const bot = new Discord.Client();

var oyun = [
`✨ Yardım almak için | -yardım`,
`🚀 Gelişmiş Türkçe Bot`,
`⚡️ Botu eklemek için | -davet`,
`🌟 Prefix ayarlamak için | -prefix`,
]

client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "LISTENING"});

        }, 2 * 5000);
});





//-----------------Etiket Prefix-----------------\\



client.on('message', async msg => {
    let prefix = fynx.prefix;
  if(msg.content == `<@713713727794446397>`) return msg.channel.send(`> **Prefix | Prefix**\n\n> Sanırım beni etiketlediniz.\n > Buyurun prefix(ön ek)im \`${prefix}\``);
});



//---------------------------------------------------\\


