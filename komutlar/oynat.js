const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Müzik oynatabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if (!args[0]) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Müzik oynatabilmek için aranacak kelime veyahut kelimeler giriniz!` }})  
const SuAndaSarkiOynatilmaktadir = client.player.isPlaying(message.guild.id);
if(SuAndaSarkiOynatilmaktadir){
const sarki = await client.player.addToQueue(message.guild.id, args.join(" "));
  const kuyrukekle = new Discord.MessageEmbed()
  .setColor(FynxDogru)
  .setTitle("Fynx Music - Kuyruğa Ekle")
  .setDescription(`<a:tik:734892939737694239>  | \`${sarki.name}\` adlı müzik, ${message.author} tarafından kuyruğa eklendi!`)
  .setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());   
message.channel.send(kuyrukekle)
    } else {
const sarki = await client.player.play(message.member.voice.channel, args.join(" "));
  const oynanan = new Discord.MessageEmbed()
  .setColor(FynxDogru)
  .setTitle("Fynx Music - Oynatılan Şarkı")
  .setDescription(`<a:calan:735111831550427166>  | \`${sarki.name}\` adlı müzik şu anda oynatılıyor.`)
  .setThumbnail(client.user.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL());   
message.channel.send(oynanan)
sarki.queue.on('end', () => {
message.channel.send({embed: {color: FynxHata, description: `<a:tik:734892939737694239>  | Kuyruktaki tüm müzikler oynatıldı. Fynx Music ses kanalından ayrılıyor!` }})
    })
    }    
};

module.exports.config = {
    name: "oynat",
    aliases: ["çal"]
};