const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  

exports.run = async (bot, message, args) => {
 
  let uye = args[0]

const hata = Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription("Premium üyelik verebilmek için bir kullanıcı bilgisi girmeniz gerekmektedir.");

const dogru = Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Başarılı")
.setDescription(`<@${uye}> adlı kullanıcıya premium üyelik verildi!`)
  if (!uye) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`premium_${uye}`)
  
  message.channel.send(`**${uye}** IDli kullanıcı artık gold üye değil!`)
}
exports.config = {
  name: 'premuim-al',
  aliases: ["premiumal"]
};
