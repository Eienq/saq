const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {

  if (!message.member.roles.id !== "DESTEK EKİBİ ID") {
        return message.channel.send(' **Bu Komutu Kullanmak için** Destek Ekibi **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
    let toverify = message.guild.member(message.mentions.users.first());
    let verifyrole = "ABONE ROL ID";//lütfen çalmayın zaman harcadım lord creative  
    if (!verifyrole) return message.channel.send("Rol Bulunamadı Lütfen 'Abone' Adıyla Rol Oluşturunuz.");
    if (!toverify) return message.channel.send("Bir Kişiyi Et");
    await (toverify.roles.add(verifyrole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let verifembed = new Discord.MessageEmbed()
        .setTitle("Abone Rölü Verildi")//lütfen çalmayın zaman harcadım lord creative  
        .setColor('#ffd100')
        .addField("Abone Rolü Veren Yetkili", `${message.author.tag}`, true)
        .addField("Abone Rolü Alan Kullanıcı", `${vUser}`, true)
        .setTimestamp();
    let veriflog = "LOG KANAL ID";
      if (!veriflog) return message.channel.send("Doğrulama Kullanıcı Log Kanalı bulunamadı. Lütfen ':pushpin:╏abone-rol-log' Adlı Kanal Oluşturunuz.`");
    veriflog.send(verifembed); 
}
exports.config = {
  name: "a",
  aliases: []
};

