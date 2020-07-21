const Eris = require("eris");
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

  const prefix = args.join(' ')
  if (!prefix) return message.channel.send(`Bir prefix belirtmelisin.`)
  if (prefix.includes(' ')) return message.channel.send(`Bir prefix boşluk içeremez.`)
  if (prefix.length > 5) return message.channel.send(`Bir prefix 5 karakterden uzun olamaz.`)

  db.set(`prefix_${message.guildID}`, prefix)
  message.channel.send(`Başarıyla prefix **${prefix}** olarak ayarlandı!`)
}

module.exports.config = {
  name: "prefix",
  aliases: ["setprefix"]

}