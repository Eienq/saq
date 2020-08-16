const Discord = require("discord.js")
const fs = require("fs")

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setAuthor(`Fynx Music - Destek Ol!`, client.user.avatarURL())
.setDescription(`Selam ${message.author},\n\n**➳** Şu anda botumuzun destek bölümünü görmektesin.\nSana biraz buradan bahsedeyim.\n\n**➳** Bize destek olanların avantajları;\n\`1-\` Fynx Code sunucumuzda "Hazır Sistemler, Elmas Kodlar, Altın Kodlar"a anında erişim izni\n\n\`2-\` Fynx Music Beta sürümünden çıktığı zamandan itibaren sınırsız Premium Üyelik\n\n\`3-\` Websitemizde sizlere özel ayrılan bir bölüm\n\n\`4-\` Her ay, Fynx Music Beta sürümden çıktıktan sonra destek olan üyeler arasında güzel ve büyük çekilişler\n\nve dahası için destek olabilirsiniz.\n\n**➳ Destek Olabilmek için;**\n\n• İninal Barkod:\n4 000090 142273 \n\n**➳ Destek olacağınız vakit açıklamanızda Discord kullanıcı adınızı ve kullanıcı id'nizi belirterek tüm özellikleri kullanabilir ve çekilişlerimize katılabilirsiniz.**`)                                                              
.setFooter(`${message.author.username} tarafından istendi!`, message.author.avatarURL()) 
.setTimestamp()
.setThumbnail(message.author.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'destek',
   aliases: ["destekol"]
 };