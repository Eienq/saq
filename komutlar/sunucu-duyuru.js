const Discord = require('discord.js');

 exports.run = (client, message, args) => {

   let question = args.join(' ');

   let user = message.author.username

    const embedd = new Discord.MessageEmbed()

     .setDescription(`Yazı Yazman Gerek`);
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));

     const embed = new Discord.MessageEmbed()

       .setColor("#ffd100")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Pirate', client.user.avatarURL)

       .addField(`**Pirate | Duyuru**`, `**${question}**`)
   
     message.channel.send(embed).then(function(message) {

       });

     };

     exports.config = {
     name: 'duyuru',
     aliases: ['duyuru-yap']
};

