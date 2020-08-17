const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const fynx = require("./ayarlar/bot.json"); 
const { Player } = require("discord-player"); 
const db = require('quick.db');

const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";


//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const emmmmbed = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png`)
.addField(`Fynx Music - Teşekkürler`, `Selamlar, ben Bay Ördekcik(Fynx Music Geliştiricisi) öncelikle botumuzu eklediğiniz ve bize destek olduğunuz için sizlere teşekkürlerimi sunarım`)
.addField(`Fynx - Prefix(Ön Ek)`, `Fynx Music botun prefixi(ön eki) = \`${fynx.prefix}\`\n\n Değiştirebilmek için \`${fynx.prefix}prefix\` yazabilirsiniz.`)
.addField(`Fynx Music - Nasıl Kullanılır?`, `Fynx Music botun tüm özelliklerinden yararlanabilmek için sadece \`${fynx.prefix}yardım\` yazmanız yeterlidir.`)
.addField(`Fynx Music - Linkler`, `Destek Sunucumuz:\nhttps://discord.gg/fynxcode\n\nWebsitemiz: https://fynxmusic.tk/`)
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
`💫 İngilizce dil desteği yakında!`,
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
  client.channels.cache.get('743094439500841042').send(`${guild}, isimli sunucuya eklendim!`)
})

client.on('guildRemove', async guild => { 
  client.channels.cache.get('743094439500841042').send(`${guild}, isimli sunucudan atıldım.. :(`)
})

//-----------------Etiket Prefix-----------------\\



client.on('message', async msg => {
    let prefix = db.fetch(`prefix.${msg.guild.id}`) || fynx.prefix;
  if(msg.content == `<@!522870338867167254>`) return msg.channel.send(`> **Fynx Music - Prefix**\n\n> Sanırım beni etiketlediniz.\n > Buyurun prefix(ön ek)im \`${prefix}\``);
});

client.on('message', async message => {
  let prefix = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
if (message.content == `${prefix}atla`) { 
 if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Oynatılan bir müziği atlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
const sarki = await client.player.skip(message.guild.id);
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | Müzik Atlandı:\n\`${sarki.name}\`` }})
}
});







client.on('message', async message => {
  let prefix = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
if (message.content == `${prefix}davet`) { 
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Fynx Music Linkler`, client.user.avatarURL())
.setDescription('**• [Fynx Music`i Ekleyin.](https://discord.com/oauth2/authorize?client_id=522870338867167254&scope=bot&permissions=8)**\n\n**• [Fynx Music Websitesi](https://fynxmusic.tk/)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail('https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png')
message.channel.send(embed)   
 }
});






client.on('message', async message => {
let p = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
if (message.content == `${p}destek`) { 
const embed = new Discord.MessageEmbed()
.setAuthor(`Fynx Music - Destek Ol!`, client.user.avatarURL())
.setDescription(`Selam ${message.author},\n\n**➳** Şu anda botumuzun destek bölümünü görmektesin.\nSana biraz buradan bahsedeyim.\n\n**➳** Bize destek olanların avantajları;\n\`1-\` Fynx Code sunucumuzda "Hazır Sistemler, Elmas Kodlar, Altın Kodlar"a anında erişim izni\n\n\`2-\` Fynx Music Beta sürümünden çıktığı zamandan itibaren sınırsız Premium Üyelik\n\n\`3-\` Websitemizde sizlere özel ayrılan bir bölüm\n\n\`4-\` Her ay, Fynx Music Beta sürümden çıktıktan sonra destek olan üyeler arasında güzel ve büyük çekilişler\n\nve dahası için destek olabilirsiniz.\n\n**➳ Destek Olabilmek için;**\n\n• İninal Barkod:\n4 000090 142273 \n\n**➳ Destek olacağınız vakit açıklamanızda Discord kullanıcı adınızı ve kullanıcı id'nizi belirterek tüm özellikleri kullanabilir ve çekilişlerimize katılabilirsiniz.**`)                                                              
.setFooter(`${message.author.username} tarafından istendi!`, message.author.avatarURL()) 
.setTimestamp()
.setThumbnail(message.author.avatarURL())
message.channel.send(embed)   
}
});





client.on('message', async message => {
let p = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
if (message.content == `${p}devam`) {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Duraklatılan bir müziği devam ettirebilmek için bir ses kanalında olmanız gerekmektedir!` }})
const sarki = await client.player.resume(message.guild.id);
if(!sarki) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | \`${sarki.name}\` adlı müzik devam ettiriliyor.` }})
}
});






client.on('message', async message => {
let p = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
if (message.content == `${p}duraklat`) {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Oynatılan bir müziği duraklatabilmek için bir ses kanalında olmanız gerekmektedir!`}})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
const sarki = await client.player.pause(message.guild.id);
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | \`${sarki.name}\` adlı müzik duraklatıldı!` }})
}
});


client.on('message', async message => {
let p = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
if (message.content == `${p}durdur`) {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Oynatılan bir müziği durdurabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
client.player.stop(message.guild.id);
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | Müzik durduruldu. Fynx Music ses kanalından ayrılıyor!!` }})
}
});





client.on('message', async message => {
let p = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
if (message.content == `${p}döngü`) {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Döngüyü ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
const dongu = client.player.getQueue(message.guild.id).repeatMode;
if(dongu){
client.player.setRepeatMode(message.guild.id, false);
return message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | Döngü deaktif edildi!` }})
    } else {
client.player.setRepeatMode(message.guild.id, true);
return message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | Döngü aktif edildi!` }})
    }
}
});








const seksizaman = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");
const istatistikler = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()
.setFooter("Fynx Music © 2020", client.user.avatarURL())
.addField("<a:coder:734885134800519288>  | **Botun Sahibi**", "<@236173144300191754> <@327064201245753344>")
.addField("<:ping:735102803340558336>  | **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
.replace("{ping1}", new Date().getTime() - message.createdTimestamp)
.replace("{ping2}", client.ws.ping),true)
.addField("<:bellek:735103897449922610>  | **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
.addField("<:uptime:735102804468957284>  | **Çalışma süresi**", seksizaman, true)
.addField("<:discordjs:735102801449058364>  | **Discord.JS sürüm**", "v" + Discord.version, true)
.addField("<:nodejs:735102802614943826>  | **Node.JS sürüm**", `${process.version}`, true)
.addField(":microphone:  | **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
.addField(`<:belge:742884430997225583>  | **Sunucu Sayısı**`, client.guilds.cache.size, true)
.addField(`:family_man_girl:  | **Kullanıcı Sayısı**`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(`<:sunucu:736507254857269328>  | **Sunucu Lokasyonu**`, `<a:turkiye:734888652827656262>  Turkey, Izmir`, true)
return message.channel.send(istatistikler);