const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("**Ne yazık ki bu komutu kullanmaya yetkin yok. Yönetici yetkisine sahip olmanız gerekmektedir.**")
    .setFooter(bot.user.username, bot.user.avatarURL)
      .setColor("#ffd100");
    message.channel.send(embed);
    return;
  }
  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Lütfen davet eklenecek kişiyi etiketleyiniz!**")
        .setColor("#ffd100")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Lütfen eklenecek davet sayısını giriniz.**")
        .setColor("#ffd100")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("#ffd100")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`${u} Adlı şahsa; ${m} davet eklendi!`);
  message.channel.send(embed);
  db.add(`davet_${u.id}_${message.guild.id}`, +m);
};
module.exports.config = {
    name: "davet-ekle",
  aliases: ["davetekle"]
};
