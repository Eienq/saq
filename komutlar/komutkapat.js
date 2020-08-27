let ownerid = "327064201245753344";

exports.run = (client, message, args) => {
  if(message.author.id == ownerid) {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send("`" + args[0] + "` Adında bir komut bulunamadı!");
  } else {
    message.channel.send("`" + command + "` Adlı komut devre dışı bıraklıyor...")
      .then(m => {
        client.unload(command)
          .then(() => {
            m.edit("`" + command + "` Adlı komut başarılı bir şekilde devre dışı bırakıldı.");
          })
          .catch(e => {
            m.edit(`Komut devre dışı bırakılırken bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
} else {
return message.channel.send(`Bu komutu sadece \`Bay Ördekcik#8735\` kullanabilir!`)
}
};

exports.config = {
  name: "komutkapat",
  aliases: ['kk']

};

