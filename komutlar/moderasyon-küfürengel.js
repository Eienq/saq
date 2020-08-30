const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("<a:pirate:749380925619437619>**Yetersiz **yetki!**")
  
  if (!args[0]){
    message.channel.send('<a:pirate:749380925619437619> **Küfür-engel aç/kapat Yazmalısın**')
  }
  if (args[0] === 'aç'){
    message.channel.send("<a:pirate:749380925619437619> **Sunucunuzda Küfür Engelleme Aktif**")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('<a:pirate:749380925619437619> **Küfür Engel Başarıyla Kapatıldı**')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
 exports.config = {
      name: 'küfür-engel',
   aliases: [""]
 };