const Discord = require("discord.js");
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = function(client, message, args) {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("• Hata: 0014 •")
.setDescription("Öneri gönderebilmek için bir öneri belirtiniz.")
.setFooter(`Fynx Music © 2020 - All right reserved.`);

const onerili = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Başarılı")
.setDescription("Öneriniz alınmıştır! Teşekkür ederiz.")
.setFooter(`Fynx Music © 2020 - All right reserved.`);  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "724723032140152862"; // Sunucu ID
 
  var channelID = "743532361974808607"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor("Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("• Öneren Kullanıcı:", message.author.tag, true)
 
      .addField("• Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("• Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 