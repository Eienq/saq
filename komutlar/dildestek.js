const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json');
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";  

exports.run = async(client, message, args) => {

    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  
const trperm = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata/Error")
.setDescription(`TR: ${message.author}, Bu komutu kullanabilmek için yönetici yetkisine sahip olmanız gerekmektedir.\n\nEN: ${message.author}, You can not use this command because you do not have administrator permission.`);  
  
const nolang = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata/Error")
.setDescription(`TR: Lütfen bir dil seçiniz.\nMevcut diller; \`TR\`, \`EN\`\nKullanım: \`${p}dil TR\` \n\nEN: Please select a language.\nAvailable languages; \`TR\`, \`EN\`\nUsage: \`{p}language EN\` `);  
  
const settr = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Başarılı")
.setDescription(`Fynx Music'in dili başarılı bir şekilde \`Türkçe\` olarak ayarlandı!`);  
  
const tr = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Hata")
.setDescription(`Fynx Music'in dili zaten \`Türkçe\` olarak ayarlanmış bulunmaktadır!`);  
  
const seten = new Discord.MessageEmbed()
.setColor(FynxDogru)
.setTitle("Fynx Music - Successful")
.setDescription(`Fynx Music's language has been successfully set to \`English\`!`);  
  
const en = new Discord.MessageEmbed()
.setColor(FynxHata)
.setTitle("Fynx Music - Error")
.setDescription(`Fynx Music's language is already set to \`English\`!`);    
	
	let color = db.fetch(`color_${message.guild.id}`) || '#fff000';
	let lang = args[0];

		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(trperm)


	if (!lang) return message.channel.send(nolang)
	if (lang != 'EN' && lang != 'TR') return message.channel.send(nolang)	

  	if (lang === 'TR') {
		let aktif = db.has(`lang_${message.guild.id}`, 'TR') 
		if (aktif) return message.channel.send(tr)
		db.set(`lang_${message.guild.id}`, 'TR')
	  message.channel.send(settr)
	}
  
	if (lang === 'EN') {
		let enable = db.has(`lang_${message.guild.id}`, 'EN')
		if (enable) return message.reply(en)
		db.set(`lang_${message.guild.id}`, 'EN')
	    message.channel.send(seten)
	}

}

exports.config = {
	name: 'lang',	
aliases: ["dil"]
}

















//&& lang !='ES' && lang !='RU' && lang !='DE'

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