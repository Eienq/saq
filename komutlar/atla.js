const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Oynatılan bir müziği atlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
const sarki = await client.player.skip(message.guild.id);
const embed = new Discord.MessageEmbed() 
.setColor(FynxDogru) 
.setTitle("Fynx Music - Atla")
.setDescription(`<a:tik:734892939737694239>  | Müzik Geçildi!\n\nGeçilen Müzik İsmi: \n\`${sarki.name}\`\n\n${message.author} tarafından geçildi!`) 
.setThumbnail(message.author.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL())
message.channel.send(embed)

};

module.exports.config = {
    name: "atla",
    aliases: ["geç", "s", "skip"]
};
