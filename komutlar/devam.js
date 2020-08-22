const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Duraklatılan bir müziği devam ettirebilmek için bir ses kanalında olmanız gerekmektedir!` }})
const sarki = await client.player.resume(message.guild.id);
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
const embed = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Devam Et")
.setDescription(`<a:tik:734892939737694239>  | \`${sarki.name}\` adlı müzik devam ettiriliyor.\n\n${message.author} tarafından devam ettirildi!`) 
.setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL())
message.channel.send(embed)
}

module.exports.config = {
    name: "devam",
    aliases: ["devamet", "devam-et"]
};