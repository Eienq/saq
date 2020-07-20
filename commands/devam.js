const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `Duraklatılan bir müziği devam ettirebilmek için bir ses kanalında olmanız gerekmektedir!` }})

    const song = await client.player.resume(message.guild.id);

    if(!song) return message.channel.send({embed: {color: embedFail, description: `Şu anda hiçbir müzik çalmamaktadır!` }})

    message.channel.send({embed: {color: embedSuccess, description: `\`${song.name}\` adlı müzik devam ettiriliyor.` }})

};

module.exports.config = {
    name: "devam",
    aliases: ["devamet", "devam-et"],
    permlevel: 0
};