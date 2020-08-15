const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const fynx = require("./ayarlar/bot.json"); 
const { Player } = require("discord-player"); 
const db = require('quick.db');

//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const emmmmbed = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png`)
.addField(`Fynx Music - Teşekkürler`, `Selamlar, ben Bay Ördekcik(Fynx Music Geliştiricisi) öncelikle botumuzu eklediğiniz ve bana destek olduğunuz için sizlere teşekkürl
erimi sunarım`)
.addField(`Fynx - Prefix(Ön Ek)`, `Fynx Music botun prefixi(ön eki) = \`${fynx.prefix}\``)
.addField(`Fynx Music - Nasıl Kullanılır?`, `Fynx Music botun tüm özelliklerinden yararlanabilmek için sadece \`+yardım\` yazmanız gerekmektedir.`)
.addField(`Fynx Music - Linkler`, `Destek Sunucumuz:\nhttps://discord.gg/fynxcode`)
.setFooter(`Fynx Music © 2020`)
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
let prefix = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
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

client.on("ready", ready => { 
client.channels.cache.get("743218160672702608").setName(`🎀 ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`)
client.channels.cache.get("743218148458889246").setName(`🎀 ${client.guilds.cache.size} Sunucu`);
});

client.login(fynx.fynxtoken)
.then(function() {
console.log('[FynxCode] Token doğru. Bot aktif ediliyor.')
}, function(err) {
console.log("[Hata] Tokeniniz yanlış. Bot başlatılamıyor.")
setInterval(function() {
process.exit(0)
}, 20000);
})

//------------------Değişen Oynuyor---------------------------\\

const bot = new Discord.Client();

var oyun = [
`🎀 Sponsor: glitch.com`,
`🔨 Yapımcı: Bay Ördekcik / Lord Creative`,
`✨ Yardım almak için | +yardım`,
`🌈 fynxmusic.tk`,
`🚀 Gelişmiş Müzik Botu`,
`⚡️ Botu eklemek için | +davet`,
`🌟 Prefix ayarlamak için | +prefix`,
`💫 +5 dil desteği yakında!`,
`🌹 Destek olmak için | +destek `,
`💡 Öneride bulunmak için | +öneri`
]

client.on("ready", () => {
setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], {"type": "LISTENING"});
        }, 2 * 5000);
});

//--------------------------Premium-----------------------------\\

client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`premium_${msg.author.id}`)
          if (i == 'premium') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
    const premiumembed = new Discord.MessageEmbed()
    .setTitle("Fynx Music")
    .setDescription(`${msg.author} isiminde bir Premium üye belirdi! Teşekkür ederiz <:fynxcode_kalpsol:742831233708589168> <:fynxcode_kalpsag:742831233452605491>`)
    
   msg.channel.send(premiumembed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});

//------------------------Eklendim Atildim-------------------------------\\

client.on('guildCreate', async guild => { 
  client.channels.get('743094439500841042').send(`${guild}, isimli sunucuya eklendim!`)
})

client.on('guildRemove', async guild => { 
  client.channels.get('743094439500841042').send(`${guild}, isimli sunucudan atıldım.. :(`)
})

//-----------------Etiket Prefix-----------------\\

client.on('message', async msg => {
  let prefix = db.fetch(`prefix.${msg.guild.id}`) || fynx.prefix;
  if(msg.content == `<@522870338867167254>`) return msg.channel.send(`Prefixim ${prefix}`);
});
