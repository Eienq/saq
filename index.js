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
.setTimestamp()
.setImage(`https://i.pinimg.com/originals/a7/2e/dd/a72eddb090f20f7f8dd535c8390c2fba.gif`);

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

//-------------7/24 Komutu ---------------\\


const http = require("http");
app.get("/", (request, response) => {
console.log(`${fynx.pingmesaj}`);
response.sendStatus(200);
});
app.listen(fynx.fynxport);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 1000 * 60 * 30);

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
   msg.channel.send('**Sanirim burada bir premuim üye var**\n**Evet evet cidden var.**')
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});

//------------------------Eklendim Atildim-------------------------------\\

client.on('guildCreate', async guild => { 
  client.channels.get('log kanal id').send(`${guild}, isimli sunucuya eklendim!`)
})

client.on('guildRemove', async guild => { 
  client.channels.get('log kanal id').send(`${guild}, isimli sunucudan atıldım.. :(`)
})

//---------------------Ses log------------------------------------------\\

client.on('voiceStateUpdate', (oldMember, newMember) => {
let saniye = db.fetch(`seslisaniye_${newMember.guild.id + newMember.id}`)
let dakika = db.fetch(`seslidakika_${newMember.guild.id + newMember.id}`)
let saat = db.fetch(`seslisaat_${newMember.guild.id + newMember.id}`)
let gün = db.fetch(`sesligün_${newMember.guild.id + newMember.id}`)
let dakikaek = Math.floor(saniye / 60)
let saatek = Math.floor(dakika / 60 )
let günek = Math.floor(saat / 24 )
let dakikaeksi = saatek * 60
let saateksi = günek * 24
 let saniyeeksi = dakikaek * 60
if(saniye => 60) {dakika = Math.floor(dakika + dakikaek) ; saniye = Math.floor(saniye - saniyeeksi)}
if(dakika => 60) {saat = Math.floor(saat + saatek) ; dakika = Math.floor(dakika - dakikaeksi)}
if(saat => 24) {gün = Math.floor(gün + günek) ; saat = Math.floor(saat - saateksi)}
let rol = db.fetch(`sesödül_${newMember.guild.id}`)
 
if(oldMember.voiceChannel && newMember.voiceChannel){
if(oldMember.voiceChannelID === newMember.voiceChannelID) return ;
}
let saati = db.fetch(`seslisüredakikası_${newMember.guild.id}`)
let dilimi = db.fetch(`seslisüredilimi_${newMember.guild.id}`)
 
 let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
let ms1 = require('parse-ms')
let süre = db.fetch(`seslisüre_${newMember.guild.id + newMember.id}`)
 let timeObj = ms1(Date.now() - süre)
let mlog =  db.fetch(`seslog_${oldMember.guild.id}`)
if(!mlog) return
if(oldMember.user.bot) return;
if(newMember.user.bot) return;
 
let kanal = client.channels.get(mlog)
 if(oldUserChannel === undefined) {
let embed = new Discord.RichEmbed()
.setTitle("Bir Kullanıcı Sesli Kanala Girdi!")
.setThumbnail(newMember.avatarURL||newMember.defaultAvatarURL)
.setDescription(`Kullanıcı : ${newMember} \nKanalın Adı : ${newUserChannel}`)
.setColor("#66ff00")
.setTimestamp()
kanal.send(embed)
db.delete(`seslisüre_${newMember.guild.id + newMember.id}`)
 db.set(`seslisüre_${newMember.guild.id + newMember.id}`, Date.now())
 }
if(newUserChannel === undefined) {
let embed = new Discord.RichEmbed()
.setTitle("Bir Kullanıcı Sesli Kanaldan Çıktı!")
.setThumbnail(oldMember.avatarURL||oldMember.defaultAvatarURL)
.setDescription(`Kullanıcı : ${oldMember} \nKanalın Adı : ${oldUserChannel}\n Sesli Kanalda Bulunma Süresi: **${timeObj.days} gün ${timeObj.hours} saat ${timeObj.minutes} dakika ${timeObj.seconds} saniye!**`)
.setColor("#ff0000")
.setTimestamp()
kanal.send(embed)
if (!newMember.roles.some(Rol => Rol.id === rol)) {
if(dilimi == "saniye") {
if(timeObj.seconds >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "dakika") {
if(timeObj.minutes >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "saat") {
if(timeObj.hours >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "gün") {
if(timeObj.days >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
 }
if (!newMember.roles.some(Rol => Rol.id === rol)) {
if(dilimi == "saniye") {
if(saniye >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "dakika") {
if(dakika >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "saat") {
if(saat >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "gün") {
if(gün >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
 }
 
db.add(`seslisaniye_${newMember.guild.id + newMember.id}`, timeObj.seconds)
db.add(`seslidakika_${newMember.guild.id + newMember.id}`, timeObj.minutes)
db.add(`seslisaat_${newMember.guild.id + newMember.id}`, timeObj.hours)
db.add(`sesligün_${newMember.guild.id + newMember.id}`, timeObj.days)
db.delete(`seslisüre_${newMember.guild.id + newMember.id}`)
db.set(`seslisüre_${newMember.guild.id + newMember.id}`, Date.now())
 }
if(newUserChannel) {
if(newUserChannel === undefined) return
if(oldUserChannel === undefined) return
 
 let embed = new Discord.RichEmbed()
.setTitle("Bir Kullanıcı Başka Bir Sesli Kanala Geçti!")
.setDescription(`Kullanıcı : ${newMember} \nEski Kanalın Adı : ${oldUserChannel}\nEski Kanalda Bulunma Süresi : **${timeObj.days} gün ${timeObj.hours} saat ${timeObj.minutes} dakika ${timeObj.seconds} saniye!**\nYeni Kanalın Adı : ${newUserChannel}`)
.setColor("#ffff00")
.setTimestamp()
kanal.send(embed)
if (!newMember.roles.some(Rol => Rol.id === rol)) {
if(dilimi == "saniye") {
if(saniye >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "dakika") {
if(dakika >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "saat") {
if(saat >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "gün") {
if(gün >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
 }
 
 
 if (!newMember.roles.some(Rol => Rol.id === rol)) {
if(dilimi == "saniye") {
if(timeObj.seconds >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "dakika") {
if(timeObj.minutes >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "saat") {
if(timeObj.hours >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
if(dilimi == "gün") {
if(timeObj.days >= saati) {
oldMember.addRole(rol)
let embed = new Discord.RichEmbed()
.setDescription(`${oldMember} Adlı Kullanıcı ${oldUserChannel} Sesli Kanalında ${saati} ${dilimi} Bulunarak <@&${rol}> Rolünü Kazandı!`)
.setColor("RANDOM")
kanal.send(embed)
}
}
 }
db.add(`seslisaniyeee_${newMember.guild.id + newMember.id}`, timeObj.seconds)
db.add(`seslidakikaaa_${newMember.guild.id + newMember.id}`, timeObj.minutes)
db.add(`seslisaat_${newMember.guild.id + newMember.id}`, timeObj.hours)
db.add(`sesligün_${newMember.guild.id + newMember.id}`, timeObj.days)
db.delete(`seslisüre_${newMember.guild.id + newMember.id}`)
db.set(`seslisüre_${newMember.guild.id + newMember.id}`, Date.now())
}
})