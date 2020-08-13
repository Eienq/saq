const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  
  
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
 
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription(`Bu komutu kullanabilmek için;\n**Sunucuyu Yönet** yetkisine sahip olmanız gerekmektedir. \nFynx Music'in şu anki prefixi: \`${p}\``));
  
if(args[0] === "ayarla") {
if(o) { return message.channel.send(new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription(`Fynx Music'in prefixi zaten ayarlanmış.\nFynx Music'in şuan ki  prefixi: \`${p}\` \nFynx Music'in sıfırlamak için \`${p}prefix sıfırla\` yazabilirsiniz. `));               
      }
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription(`Lütfen bir prefix giriniz.\nFynx Music'in şu anki prefixi: \`${p}\``));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Başarılı")
.setDescription(`Fynx Music'in yeni prefixi ayarlandı.\nYeni prefix: \`${args[1]}\``));
}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription(`Fynx Music'in prefixini sıfırlayabilmek için önceden ayarlı olması gerekmektedir.\nFynx Music'in şu anki prefixi: \`${p}\``));
    }
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Başarılı")
.setDescription(`Fynx Music'in prefixi başarılı bir şekilde sıfırlandı.\nFynx Music'in şu anki prefixi: \`${a}\``));
  }
 
 if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription(`Prefix Ayarlamak İçin ${p}prefix ayarla <prefix> / Sıfırlamak İçin ${p}prefix sıfırla Şuanki Prefix: ${p}`));
  
};

exports.config = {
    name: 'prefix',      
    aliases: ['p']
};
  
