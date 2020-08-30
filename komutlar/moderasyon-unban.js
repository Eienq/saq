const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const permError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 01 •')
        .setDescription('```Bu Komutu Kullanmak İçin "Üyeleri Yasakla" Yetkisine Sahip Olmalısın```')
    
const userError = new Discord.RichEmbed()
    .setColor('#ed455a')
      .setTitle('• Hata: 02 •')
        .setDescription('```Yasağı kaldırmak için bir kullanıcı kimliği girmelisiniz g!unban İD```')
  
const userError2 = new Discord.RichEmbed()
.setColor('#ed455a')
.setTitle('• Hata: 03 •')
.setDescription("```ID'de Harf Kullanılanamaz```")
  
const userError3 = new Discord.RichEmbed()
.setColor('#ed455a')
.setTitle('Fynx Moderasyon - Hata')
.setDescription('```Bu Kullanıcı Yasaklanmamış```')
    
const levelError = new Discord.RichEmbed()
.setColor('#ed455a')
.setTitle('• Hata: 05 •')
.setDescription('```Sizinle aynı veya daha yüksek bir role sahip bir üyenin yasağını kaldırmazsınız```')

 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send
(permError).then
(message.delete()).then
(msg => msg.delete(5000));
  
let user = args[0];
if  (!user) return message.channel.send
(userError).catch(console.error).then
(message.delete()).then
(msg => msg.delete(5000));
  
if  (isNaN(args[0])) return message.channel.send
(userError2).catch(console.error).then
(message.delete()).then
(msg => msg.delete(5000));

if  (user.highestRole >= message.author.highestRole) return message.channel.send
(levelError).then
(message.delete()).then
(msg => msg.delete(5000));
  
const banList = await message.guild.fetchBans();
  
  
if (!user.id === banList) return message.channel.send
      (userError3).then
        (message.delete()).then
          (msg => msg.delete(5000));
  
  message.guild.unban(user);
message.channel.send(`<@!${user}> Adlı Kullanıcının Yasağı Başarıyla Kaldırıldı.`)
  
  }

exports.config = {
    name: 'unban',
    aliases: []

  };