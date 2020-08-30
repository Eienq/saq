const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {

  
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    const kisi = message.mentions.users.first()
    const sebep = args[1]
    if (!kisi) {
      return message.channel.send(`<a:pirate:749380925619437619> ${message.author} **Banlanıcak Kullanıcıyı Etiketlemelisin. Etiketliyorsan Bu Hatayı Alıyorsan O Üyenin Görebildiği Bir Kanalda Banlamayı Denemelisin**`)
    }
    
    if (!sebep) {
      return message.reply(`<a:pirate:749380925619437619>  **Sunucudan banlancak kişiyi veya ban sebebini yazmadın!**`)
    }
    client.channels.send(`<a:pirate:749380925619437619>  ${kisi} - <@${message.author.id}> **Tarafından ${sebep} Nedeniyle Sunucudan Yasaklandı!**`)  
    message.guild.members.ban(kisi.id, sebep)
     
  
};

exports.config = {
  name: 'ban',
  aliases: ["yasakla"]
};
