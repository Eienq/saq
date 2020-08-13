const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let uye = args[0]
  if (!uye) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`premium_${uye}`, 'premium')
  
  message.channel.send(`**${}** IDli kullanıcı artık gold üye oldu!`)
}
exports.conf = {
  name: 'premium-ver',   
  aliases: ["premiumver"]
};
