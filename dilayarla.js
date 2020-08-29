const db = require("quick.db")
const ayarlar = require("../ayarlar/bot.json")
exports.run = async function(client, message, args) {
let dil = await db.fetch(`dil_${message.guild.id}`);
const secenek = args[0]
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`/**SUNUCUYU-YONET**/ yetkin yok.`)
if(!secenek) return message.channel.send(ayarlar.prefix+'dilayarla tr yada en şeklinde kullanın')

if(secenek == 'tr' || "TR" || "Turkish" || "Türk"|| "türk" || "türkçe" || "Türkçe"){
db.set(`dil_${message.guild.id}`, 'TR')
message.channel.send('Botun Dili Turkce Olarak Kaydedildi!')
}

if(secenek == 'EN' || "en" || "English" || "english"){
db.set(`dil_${message.guild.id}`, 'EN')
message.channel.send('Botun Dili Ingilizce Olarak Kaydedildi!')
}   
if(secenek == 'sıfırla'){
db.delete(`dil_${message.guild.id}`)
message.channel.send('Botun Dili Sifirlandi!')
}    
};
module.exports.conf = {
  name: "dil",
  aliases: ["lang", "language", "dil-ayarla"]
};
