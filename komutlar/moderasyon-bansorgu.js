const Discord = require('discord.js');

exports.run = (client, message, args) => {
	if (!message.guild) return message.author.send('<a:pirate:749380925619437619> **Bu Komutu Sadece Moderatörler  Kulanabilir**');

    let kullanici = args[0];
    if (!kullanici) return message.channel.send("<a:pirate:749380925619437619> **Banlanan Bir kullanıcının ID'sini belirtmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`236173144300191754 **Bu kullanıcı banlanmamış.**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {

const Embed = new Discord.MessageEmbed()
 .setColor('#FFD100')
.setAuthor('Pirate | Ban Sorgulama', client.user.avatarURL())
.setDescription(`<a:pirate:749380925619437619> ${user.tag} **Adlı Kullanıcının Ban Nedeni:** \n\n**${reason || "Neden Belirtilmemiş"}**`)
message.channel.send(Embed)
    })
    }

exports.config = {
    name: 'bansorgulama',

    aliases: ['bansorgu','ban-sorgulama','ban-sorgu']
};


