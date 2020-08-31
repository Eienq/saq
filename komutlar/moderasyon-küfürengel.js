const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("<a:hypesquad1:750076071721828452> **Yetersiz** **yetki!**")
  
  if (!args[0]){
    message.channel.send('<a:hypesquad1:750076071721828452> **Küfür-engel aç/kapat Yazmalısın**')
  }
  if (args[0] === 'aç'){
    message.channel.send("<a:hypesquad1:750076071721828452> **Sunucunuzda Küfür Engelleme Aktif**")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('<a:hypesquad1:750076071721828452> **Küfür Engel Başarıyla Kapatıldı**')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
 exports.config = {
      name: 'küfürengel',
   aliases: [""]
 };