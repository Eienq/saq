const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message, args) => {
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
const track = args[0];
if (!track) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Kuyruğu silebilmek için sadece bir doğal sayı giriniz.` }})
if (args > 10) return message.channel.send({embed: {color: FynxHata, description: `Kuyruğu silebilmek için sadece \`1\` ile \`10\` arasında bir değer giriniz. `}})
if (args < 1) return message.channel.send({embed: {color: FynxHata, description: `Kuyruğu silebilmek için sadece \`1\` ile \`10\` arasında bir değer giriniz. ` }})
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Kuyruğu silebilmek için bir ses kanalında olmanız gerekmektedir!` }});
client.player.remove(message.guild.id, track);
message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | Kuyruktaki ${track} numaralı müzik kuyruktan silindi!` }})
};

module.exports.config = {
    name: "kuyruktan-sil",
    aliases: ["sil"]
};
