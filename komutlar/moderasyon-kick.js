const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.guild.members.cache.get(client.user.id).hasPermission("KICK_MEMBERS")) return message.channel.send('Gerekli izniniz bulunmuyor')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:ayar:750021160237793311> **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:ayar:750021160237793311> **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:ayar:750021160237793311>  **Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:ayar:750021160237793311> **Kendini Kickleyeceğine Kendin Çıksana ?**');

  const embed = new Discord.MessageEmbed()
  .setColor("#6278c5")
  .addField('<a:ayar:750021160237793311> İşlem', 'Sunucudan Kickleme')
  .addField('<a:ayar:750021160237793311> Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('<a:ayar:750021160237793311> Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:ayar:750021160237793311> Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#6278c5")
  .setDescription(`<a:ayar:750021160237793311> **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

