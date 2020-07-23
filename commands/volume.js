const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

  if(!message.member.voice.channel) return message.channel.send({embed: {color: "RED", description: `<a:yanlis:734892943332212764>  | Ses seviyesini ayarlabilmek için bir ses kanalında olmanız gerekmektedir!` }})
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: "RED", description: `<a:yanlis:734892943332212764>  | Şu anda hiçbir müzik çalmamaktadır!` }})
  let volume = parseInt(args.join(" "));
  if (!volume) return message.channel.send({embed: {color: "RED", description: `<a:yanlis:734892943332212764>  | Ses seviyesini ayarlayabilmek için sadece bir doğal sayı giriniz.` }})
  if (args > 100) return message.channel.send({embed: {color: "RED", description: `Ses seviyesini sadece \`0\` ile \`100\` arasında ayarlayabilirsiniz. `}})
  if (args < 0) return message.channel.send({embed: {color: "RED", description: `Ses seviyesini sadece \`0\` ile \`100\` arasında ayarlayabilirsiniz. ` }})
  client.player.setVolume(message.guild.id, volume * 2);
    
  message.channel.send({embed: {color: "GREEN", description: `<a:tik:734892939737694239>  | Ses seviyesi, başarılı bir şekilde \`${args.join(" ")}\` olarak ayarlandı! ` }})


}

module.exports.config = {
  name: "ses",
  aliases: ['ses-seviyesi']
};