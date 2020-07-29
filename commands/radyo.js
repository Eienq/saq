const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client();

const emotes = require ("../config/emojis.json");
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";


const radyo = {
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
    kral    : "http://46.20.3.204/",
    kralpop : "http://46.20.3.201/;",
    line    : "http://radioline.fm:8000/",
    metro   : "http://17773.live.streamtheworld.com/METRO_FM_SC",
    radyod  : "http://radyo.dogannet.tv/radyod",
    superfm : "http://17733.live.streamtheworld.com/SUPER_FM_SC",
    JoyFm    : "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FM.mp3",
    fenomenakustik : "http://fenomenakustik.listenfenomen.com/fenomenakustik/128/icecast.audio ",
     show:   "http://46.20.3.229/;",
    taksimclup: "http://cast1.taksim.fm:8016",
    megafm: "http://46.105.35.48:9346/; ",
    halay: "http://37.247.98.8/stream/30/",
    fenomenpop: "http://fenomenoriental.listenfenomen.com/fenomenpop/128/icecast.audio ",
    showpop: "http://46.20.3.229/;",
    powerakustik: "http://powerturkakustik.listenpowerapp.com/powerturkakustik/mpeg/icecast.audio ",
    fenomenrap: "http://fenomenoriental.listenfenomen.com/fenomenrap/128/icecast.audio ",
    fenomentürk: "http://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
    barışmanço: "http://nmbshsource.mediatriple.net:7000/stream/22/",
    powerdance: "http://powerdance.listenpowerapp.com/powerdance/mpeg/icecast.audio",
    powertürk: "http://powerturkeniyiler.listenpowerapp.com/powerturkeniyiler/mpeg/icecast.audio",
    popularfm: "http://37.59.205.232:9344/;",
    palslow: "http://shoutcast.radyogrup.com:2020/stream/1;",
    radyopop: "http://80.radyopop.com/stream/1/",
    clubmix: "http://cast1.taksim.fm:8016/;",
    türkfm: "http://turkiyemfm.canliyayinda.com:8032/;",
    hitfm: "http://yayin.turkiletisim.com.tr:1094/;",
    hocalarfm: " http://95.173.185.128:9316/;",
    powertürkcover: "http://powerturkcover.listenpowerapp.com/powerturkcover/mpeg/icecast.audio",
    showradyo: "http://windows.showradyo.com.tr/;",
    mamaşfm: "http://mamasfm.com:4500/;",
    maxlounge: "http://37.59.205.232:9406/;"
    

}

exports.run = function(bot, message, args) {
/////ÖGÜN SERT DESTEK EKİBİ VENQTM İLETŞİM:   OgünSert | Kobs#2738
    if(!message.member.voice.channel) return message.channel.send({embed: {color: embedFail, description: `<a:yanlis:734892943332212764>  | Oynatılan bir müziği duraklatabilmek için bir ses kanalında olmanız gerekmektedir!`}})
         else if (args[0].toLowerCase() === "fenomen" || args[0] === "1") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.fenomen);
                message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "kral" || args[0] === "2") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.kral);
                message.reply("🎧 | **Başarılı! `KralFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "kralpop" || args[0] === "3") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.kralpop);
                message.reply("🎧 | **Başarılı! `KralPOP` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "line" || args[0] === "4") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.line);
                message.reply("🎧 | **Başarılı! `LineFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "metro" || args[0] === "5") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.metro);
                message.reply("🎧 | **Başarılı! `MetroFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
        }  else if (args[0].toLowerCase() === "radyod" || args[0] === "6") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.radyod);
                message.reply("🎧 | **Başarılı! `Radyo D FM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "super" || args[0] === "7") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.superfm);
                message.reply("🎧 | **Başarılı! `SüperFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
            } else if (args[0].toLowerCase() === "Joy" || args[0] === "8") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.JoyFm);
                message.reply("🎧 | **Başarılı! `JoyFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
    
            } else if (args[0].toLowerCase() === "fenomenakustik" || args[0] === "9") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.fenomenakustik);
                message.reply("🎧 | **Başarılı! `FenomenAkustik` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
            
                 } else if (args[0].toLowerCase() === "show" || args[0] === "10") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.show);
                message.reply("🎧 | **Başarılı! `ShowFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
            })
            
                 } else if (args[0].toLowerCase() === "taksimclup" || args[0] === "11") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.taksimclup);
                message.reply("🎧 | **Başarılı! `TaksimClup` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
               })
                   
              } else if (args[0].toLowerCase() === "megafm" || args[0] === "12") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.megafm);
               message.reply("🎧 | **Başarılı! `MegaFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                
              } else if (args[0].toLowerCase() === "fenomenpop" || args[0] === "13") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.fenomenpop);
               message.reply("🎧 | **Başarılı! `FenomenPoP` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              
              })
                
              } else if (args[0].toLowerCase() === "showpop" || args[0] === "14") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.showpop);
               message.reply("🎧 | **Başarılı! `ShowPoP` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
             })
                
              } else if (args[0].toLowerCase() === "powerakustik" || args[0] === "15") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.powerakustik);
               message.reply("🎧 | **Başarılı! `PowerAkustik` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                
              } else if (args[0].toLowerCase() === "fenomen" || args[0] === "16") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.fenomenrap);
               message.reply("🎧 | **Başarılı! `FenomenRap` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
          }) 
                } else if (args[0].toLowerCase() === "fenomentürk" || args[0] === "17") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.fenomentürk);
               message.reply("🎧 | **Başarılı! `FenomenTürk` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
          }) 

                } else if (args[0].toLowerCase() === "powerdance" || args[0] === "18") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.powerdance);
               message.reply("🎧 | **Başarılı! `Power Dance` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })

                } else if (args[0].toLowerCase() === "powetürk" || args[0] === "19") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.powertürk);
               message.reply("🎧 | **Başarılı! `PowerTürkEnİyiler` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })

                } else if (args[0].toLowerCase() === "popularfm" || args[0] === "20") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.popularfm);
               message.reply("🎧 | **Başarılı! `PopülerFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                  } else if (args[0].toLowerCase() === "palslow" || args[0] === "21") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.palslow);
               message.reply("🎧 | **Başarılı! `PalSlow` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                    } else if (args[0].toLowerCase() === "radyopop" || args[0] === "22") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.radyopop);
               message.reply("🎧 | **Başarılı! `RadyoPop` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
              })
                      } else if (args[0].toLowerCase() === "clubmix" || args[0] === "23") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.clubmix);
               message.reply("🎧 | **Başarılı! `ClubMix` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                        } else if (args[0].toLowerCase() === "türkfm" || args[0] === "24") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.türkfm);
               message.reply("🎧 | **Başarılı! `TürkFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                       } else if (args[0].toLowerCase() === "hitfm" || args[0] === "25") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.hitfm);
               message.reply("🎧 | **Başarılı! `HitFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                  } else if (args[0].toLowerCase() === "hocalarfm" || args[0] === "26") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.hocalarfm);
               message.reply("🎧 | **Başarılı! `112AcilFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                    } else if (args[0].toLowerCase() === "powertürkcover" || args[0] === "27") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.powertürkcover);
               message.reply("🎧 | **Başarılı! `PowerTürkCover` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                      } else if (args[0].toLowerCase() === "showradyo" || args[0] === "28") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.showradyo);
               message.reply("🎧 | **Başarılı! `ShowRadyo` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                        } else if (args[0].toLowerCase() === "mamaşfm" || args[0] === "29") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.mamaşfm);
               message.reply("🎧 | **Başarılı! `MamaşFM` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                          } else if (args[0].toLowerCase() === "maxlounge" || args[0] === "30") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.maxlounge);
               message.reply("🎧 | **Başarılı! `MaxLounge` çalınıyor. :musical_keyboard:**").then(m => m.delete(10000)).catch(console.error);
              })
                      
        } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                message.member.voice.channel.leave();
    return message.channel.send(`**Radyo kapatıldı** ${message.member.voice.channel}.`);
        }
    }
    
exports.config = {
  name: 'radyo',
  aliases: [],
  permLevel: 0
};


