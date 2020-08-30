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

const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let banlanıcak = message.mentions.users.first()
let banlimit = await db.fetch(`banlimit_${message.guild.id}`)
 let bansayı= await db.fetch(`bansayı_${message.author.id}`)
let guild = message.guild
if (!banlanıcak) return message.channel.send(`Kişi Seç!`)
  if (bansayı > banlimit) return message.channel.send(`Ban Sayın Limiti Geçtiği İçin Daha Fazla Banlayamazssın Üzgünüm!`)
  
  let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send('Sebep Belirt')
  
  message.channel.send(`Kullanıcı Başarıyla Banlandı`)
guild.members.ban(banlanıcak)
  db.add(`bansayı_${message.author.id}`, 1)
  let kanal = await db.fetch(`banlog_${message.guild.id}`)
  if (kanal) {
    const sa = new Discord.MessageEmbed()
    .setTitle('Kullanıcı Banlandı!')
    .setDescription(` ${banlanıcak} Adlı Kullanıcı **${sebep}** Yüzünden <@${message.author.id}> Tarafından Sunucudan Yasaklandı`)
    .setTimestamp()
    client.channels.cache.get(kanal).send(sa)
  }
  

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ban'
}; 