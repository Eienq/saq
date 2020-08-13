const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();

const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  

const sahip = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription("Premium üyelik verebilmek için Fynx Music'in yapımcısı olmanız gerekmektedir.");

exports.run = async (bot, message, args) => {
 if(message.author.id !== "327064201245753344") return message.channel.send(sahip)
 
  let uye = args[0]

const hata = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription("Premium üyelik verebilmek için bir kullanıcı bilgisi girmeniz gerekmektedir.");

const dogru = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Başarılı")
.setDescription(`<@${uye}> adlı kullanıcıya premium üyelik verildi!`)

  if (!uye) return message.channel.send(hata)
  
  db.set(`premium_${uye}`, 'premium')
  
  message.channel.send(dogru)//ıııııııııııııııııııııııı
}
exports.config = {
  name: 'premium-ver',   
  aliases: ["premiumver"]
};
