const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
/// GEREKLİLER ///  
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda oynatılan bir müziği görebilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
/////////////////

/// PREFİX ///
let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;
////////////

/// Çalan Embed ///
const calan = await client.player.nowPlaying(message.guild.id); 
const calanembed = new Discord.MessageEmbed()
.setThumbnail(calan.thumbnail)
.setColor("#22BF41")
.setDescription(`<a:calan:735111831550427166>  | Şu Anda Oynatılan:\n\nMüziğin Adı: \n\`${calan.name}\`\n\nMüziği Yükleyen Kanal: \n\`${calan.author}\` \n\nMüziğin Durumu: \n${client.player.createProgressBar(message.guild.id)}`)
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL())
message.channel.send(calanembed)
};

///////////////

module.exports.config = {
    name: "çalan",
    aliases: []
};
