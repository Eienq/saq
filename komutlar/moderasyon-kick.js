const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  

  
  if (!message.guild.members.get(client.user.id).hasPermission("KICK_MEMBERS")) return message.reply('Gerekli izniniz bulunmuyor')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.reply('<a:pirate:749380925619437619>  **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | -modlog #kanal**');
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('<a:pirate:749380925619437619>  **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.reply('<a:pirate:749380925619437619>  **Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.reply('<a:pirate:749380925619437619> **Kendini Kickleyeceğine Kendin Çıksana ?**');

  const embed = new Discord.MessageEmbed()
  .setColor("#6278c5")
  .addField('İşlem', 'Sunucudan Kickleme')
  .addField('Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.members.cache.get(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#6278c5")
  .setDescription(`<a:pirate:749380925619437619> **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

