const Discord = require('discord.js');
const fynxayarlar = require('./ayarlar/bot.json');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const fynxmusic = new Discord.ShardingManager('./index.js', {// Ana dosyanızın adını yazınız.
    totalShards: 1,
    token: fynxayarlar.token// Buraya tokeninizi yazınız.
});

fynxmusic.spawn(); 

fynxmusic.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    fynxmusic.broadcastEval(process.exit());
}, 21600000);