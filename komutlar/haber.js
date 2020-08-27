const db = require("quick.db");
const Discord = require("discord.js");
const fetch = require("node-fetch");
 
exports.run = async (client, message, args) => {
  var siteck = await fetch("http://newsapi.org/v2/top-headlines?country=tr&apiKey=c3e2429af5534e48b2278773081ab7d3");
  var bilgi = await siteck.json();
  var page = 0;
  var embed = new Discord.MessageEmbed()
                       .setColor("RANDOM")
                       .setTitle("Fynx Music - Haberler")
                       .setDescription(`**Yazan:**\n \`${bilgi.articles[0].author}\`\n\n**Başlık:**\n \`${bilgi.articles[0].title}\`\n\n**Açıklama:**\n ${bilgi.articles[0].description}\n\n[**Habere Gitmek İçin Tıklayın.**](${bilgi.articles[0].url})`)
                       .setThumbnail(bilgi.articles[0].urlToImage)
                       .setFooter(`Fynx Music - Tüm hakları saklıdır. [Sayfa ${page} / ${bilgi.articles.length}]`, client.user.avatarURL())
  message.channel.send(embed).then(async msg => {
    await msg.react("⬅")
    await msg.react("➡")
 
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 900000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 900000 });
forwards.on('collect', async (reaction, user) => {
        if(page === bilgi.articles.length) return;
        page++;
        embed.setDescription(`**Yazan:**\n \`${bilgi.articles[page-1].author}\`\n\n**Başlık:**\n \`${bilgi.articles[page-1].title}\`\n\n**Açıklama:**\n ${bilgi.articles[page-1].description}\n\n[**Habere Gitmek İçin Tıklayın.**](${bilgi.articles[page-1].url})`);
        embed.setColor('RANDOM')
        embed.setTitle("Fynx Music - Haberler")
        embed.setFooter(`Fynx Music - Tüm hakları saklıdır. [Sayfa ${page} / ${bilgi.articles.length}]`, client.user.avatarURL())
        embed.setThumbnail(bilgi.articles[page-1].urlToImage)
        msg.edit(embed)
      })
      backwards.on('collect', async (reaction, user) => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setTitle("Fynx Music - Haberler")
        embed.setDescription(`**Yazan:**\n ${bilgi.articles[page+1].author}\n\n**Başlık:**\n ${bilgi.articles[page+1].title}\n\n**Açıklama:**\n ${bilgi.articles[page+1].description}\n\n[**Habere Gitmek İçin Tıklayın.**](${bilgi.articles[page+1].url})`);
        embed.setFooter(`Fynx Music - Tüm hakları saklıdır. [Sayfa ${page} / ${bilgi.articles.length}]`, client.user.avatarURL())
        embed.setThumbnail(bilgi.articles[page+1].urlToImage)
        msg.edit(embed)
      })
 
  })
};
exports.config = {
  name: "haber",
  aliases: []

};
 
