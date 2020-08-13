const Discord = require("discord.js");
 
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  

exports.run = function(client, message, args) {

const onerisiz = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription("Lütfen bir öneri belirtiniz.");

const onerili = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Başarılı")
.setDescription("Öneriniz alınmıştır! Teşekkür ederiz.");  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "724723032140152862"; // Sunucu ID
 
  var channelID = "743532361974808607"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .addField("Eylem:", "Öneri",true)
 
      .addField("Kullanıcı:", message.author.tag, true)
 
      .addField("ID", message.author.id,true)
 
      .addField("Öneri", öneri);
 
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

 