const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//const hataembed = new Discord.MessageEmbed()
//.setColor(FynxHata)
//.setTitle("Fynx Music - Hata")
//.setDescription(`Lütfen bir dil seçiniz.\nMevcut diller; \`TR\`, \`EN\`\nKullanım: \`${p}dil TR\``)

//const errorembed = new Discord.MessageEmbed()
//.setColor(FynxHata)
//.setTitle("Fynx Music - Hata")
//.setDescription(`Please select a language.\nAvailable languages; \`TR\`, \`EN\`\nUsage: \`{p}language EN\` `)

  		//let aktif = db.has(`lang_${message.guild.id}`, 'TR')
//if(!aktif) return message.channel.send(hataembed) 
  
    		//let enable = db.has(`lang_${message.guild.id}`, 'EN')
//if(!enable) return message.channel.send(errorembed) 

 // if(db.has(`lang_${message.guild.id}`, 'EN')) {
  //if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | You must be on an audio channel to skip a playing music!` }})
//if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | No music is currently playing!` }})
//const song = await client.player.skip(message.guild.id);
//message.channel.send({embed: {color: FynxDogru, description: `<a:tik:734892939737694239>  | Skipped Music:\n\`${song.name}\`` }})


//}

////////////// TÜ RK ÇE //////////////////

  //if(db.has(`lang_${message.guild.id}`, 'TR')) {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Oynatılan bir müziği atlayabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
const sarki = await client.player.skip(message.guild.id);
const embed = new Discord.MessageEmbed() 
.setColor(FynxDogru) 
.setDescription(`<a:tik:734892939737694239>  | Müzik Geçildi!\n\nGeçilen Müzik İsmi: \n\`${sarki.name}\`\n\n${message.author} tarafından geçildi!`) 
.setThumbnail(client.user.avatarURL())
.setFooter(`Fynx Music - Tüm hakları saklıdır.`, client.user.avatarURL())
message.channel.send(embed)

  ////////////////////////////////////////
};

module.exports.config = {
    name: "atla",
    aliases: ["geç", "s", "skip"]
};
