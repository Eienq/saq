const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
    
  if (!message.guild.members.cache.get(client.user.id).hasPermission("BAN_MEMBERS")) return message.channel.send('<a:ayar:750021160237793311> 00Hey Dostum Yetkin Yetmiyor**')
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:ayar:750021160237793311> **Mod Log Kanalı Ayarlanmamış | ${prefix}modlog #kanal**`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
 if (isNaN(user)) return message.channel.send('<a:ayar:750021160237793311> **Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin**');
  if (reason.length < 1) return message.channel.send('<a:ayar:750021160237793311> **Lütfen Sebep Giriniz**');
 
  
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .addField('<a:ayar:750021160237793311> İşlem', 'Ban Kaldırma')
  .addField('<a:ayar:750021160237793311> Banı Açılan Üye', `(${user})`)
  .addField('<a:ayar:750021160237793311> Banı Açan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:ayar:750021160237793311> Banı Açma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  message.guild.members.unban(user);
  

  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setDescription(`<a:ayar:750021160237793311> Belirtiğiniz İD'nin Banı Açıldı`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'unban',
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır']
};
