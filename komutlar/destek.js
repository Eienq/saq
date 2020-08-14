const Discord = require("discord.js")
const fs = require("fs")

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Fynx Music - Destek Ol!`, client.user.avatarURL())
.setDescription(`Selam ${message.author},\n\n➳ Şu anda botumuzun destek bölümünü görmektesin.\nSana biraz buradan bahsedeyim.\n\n➳ Bize destek olanların`)
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(message.author.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'destek',
   aliases: ["destekol"]
 };