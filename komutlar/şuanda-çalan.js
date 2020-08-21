const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const calan = await client.player.nowPlaying(message.guild.id); 
const calanembed = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setImage(`https://i.ytimg.com/vi/${calan.song.id}/default.jpg?width=1920&height=1080`)
.setColor("#22BF41")
.setDescription(`<a:calan:735111831550427166>  | Şu Anda Çalınan Müzik:\n\nAdı: \`${calan.name}\`\n\nYükleyen Kanal: \`${calan.author}\` \n\nLinki: \`${calan.url}\``)
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda oynatılan bir müziği görebilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
message.channel.send(calanembed)
};

module.exports.config = {
    name: "çalan",
    aliases: []
};
