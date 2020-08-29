const Discord = require("discord.js");
const db = require("quick.db");
const fynx = require("../ayarlar/bot.json");
module.exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || fynx.prefix;
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("<a:pirate:749380925619437619> **Ne yazık ki bu komutu kullanmaya yetkin yok**")
      .setColor("#ffd100");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<a:pirate:749380925619437619> **Lütfen sunucudan yasaklanacak kişiyi etiketleyiniz!**")
        .setColor("#ffd100")
        .setFooter(client.user.username, client.user.avatarURL)
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("#ffd100")
    .setDescription(`<a:pirate:749380925619437619> ${u} **Adlı şahsın yasaklanmasını onaylıyor musunuz?**`)
    .setFooter(client.user.username, client.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("<a:pirate:749380925619437619> **İşlem iptal oldu!**"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `<a:pirate:749380925619437619> **İşlem onaylandı!** ${u} **adlı şahıs sunucudan yasaklandı!**`
        );

        u.ban(u, 2);
      }
    });
  });
};

module.exports.config = {
  
    name: "ban",
  aliases: []

};


