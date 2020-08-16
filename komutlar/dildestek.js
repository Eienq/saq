const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json');
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  

exports.run = async(client, message, args) => {
const enperm = Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Error")
.setDescription(`${message.author}, You can not use this command because you do not have administrator permission.`);
  
const trperm = Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription(`${message.author}, Bu komutu kullanabilmek için yönetici yetkisine sahip olmanız gerekmektedir.`);  
  
const nolang = Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata/Error")
.setDescription(`TR: Lütfen bir dil seçiniz.\nMevcut diller; \`TR\`, \`EN\`\n\nEN: Please select a language.\nMevcut diller; \`TR\`, \`EN\` `);  
	
	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;
	let color = db.fetch(`color_${message.guild.id}`) || '#fff000';
	let lang = args[0];

	if (db.has(`lang_${message.guild.id}`, 'EN')) {
		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(enperm)
	}
  
if (db.has(`lang_${message.guild.id}`, 'TR')) {
		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(trperm)
	}

	if (!lang) return message.reply(`Bir dil seçmelisin. \`EN\`, \`TR\``)
	if (lang != 'EN' && lang != 'TR') return message.reply(`Mevcut diller: \`EN\`, \`TR\``)	

  	if (lang === 'TR') {
		let aktif = db.has(`lang_${message.guild.id}`, 'TR') 
		if (aktif) return message.reply(`Botun dili zaten türkçe.`)
		db.set(`lang_${message.guild.id}`, 'TR')
	  message.channel.send(`Botun dili başarıyla Türkçe olarak ayarlandı.`)
	}
  
	if (lang === 'EN') {
		let enable = db.has(`lang_${message.guild.id}`, 'EN')
		if (enable) return message.reply(`Hey, Bot language is already in english.`)
		db.set(`lang_${message.guild.id}`, 'EN')
	    message.channel.send(`Successfully updated the language to English.`)
	}

}

exports.config = {
	name: 'lang',	
aliases: ["dil"]
}

















//&& lang !='ES' && lang !='RU' && lang !='DE'

	//if (lang === 'TR') {
		//let aktif = db.has(`lang_${message.guild.id}`, 'TR') 
		//if (aktif) return message.reply(`Botun dili zaten türkçe.`)
	//	db.set(`lang_${message.guild.id}`, 'TR')
	  //  message.channel.send(`Botun dili başarıyla Türkçe olarak ayarlandı.`)
	//}
  	//if (lang === 'ES') {
		//let activo = db.has(`lang_${message.guild.id}`, 'ES') 
		//if (activo) return message.reply(`El idioma de Fynx Music ya está configurado en español.`)
		//db.set(`lang_${message.guild.id}`, 'ES')
	    //message.channel.send(`El idioma de Fynx Music se ha configurado correctamente en español.`)
	//}
  	//if (lang === 'RU') {
		//let ruru = db.has(`lang_${message.guild.id}`, 'RU') 
		//if (ruru) return message.reply(`Язык Fynx Music уже установлен на русский.`)
		//db.set(`lang_${message.guild.id}`, 'RU')
	    //message.channel.send(`Язык Fynx Music успешно установлен на русский.`)
	//}
  	//if (lang === 'DE') {
		//let dede = db.has(`lang_${message.guild.id}`, 'DE') 
		//if (dede) return message.reply(`Die Sprache von Fynx Music ist bereits auf Russisch eingestellt.`)
		//db.set(`lang_${message.guild.id}`, 'DE')
	    //message.channel.send(`Die Sprache von Fynx Music wurde erfolgreich auf Deutsch eingestellt.`)
	//}