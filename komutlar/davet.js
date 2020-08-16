const Discord = require("discord.js")
const fs = require("fs")

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Fynx Music Linkler`, client.user.avatarURL())
.setDescription('**• [Fynx Music`i Ekleyin.](https://discord.com/oauth2/authorize?client_id=522870338867167254&scope=bot&permissions=8)**\n\n**• [Fynx Music Websitesi](https://fynxmusic.tk/)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail('https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png')
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };