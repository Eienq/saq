const Discord = require('discord.js');
const fynx = require("./ayarlar/bot.json");
const shard= new Discord.ShardingManager('./index.js', { // main dosyanızın ismi: server.js - main.js - bot.js olabilir
    totalShards: "auto", // shard sayısı ya da auto yazılabilir // 2k veya 1k sunucularda ideali: 2'dir.
    token: fynx.fynxtoken // token
});

shard.spawn(); // S2Ş ahanda burada başlıyor

shard.on('launch', shard => {
  console.log(`${shard.id} IDli shard başarıyla başlatıldı .`)
});

setTimeout(() => {
    console.log("yeniden başlatılıyor..")
    shard.broadcastEval("process.exit()");
}, 21600000);