const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { Attachment } = require("discord.js");
const client = new Client({ disableEveryone: true });
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const YouTube = require("simple-youtube-api");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const fetch = require("node-fetch");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const db = require("quick.db");
const dateFormat = require("dateformat");
var table = require("table").table;
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const ytdl = require("ytdl-core");
const cmd = require("node-cmd");
const queue = new Map();
const imdb = require("imdb-api");
const cooldown = new Set();
const cdtime = 5;
const prefix = "b!"
let channelc = JSON.parse(fs.readFileSync('./channelc.json' , 'utf8'));
let channeld = JSON.parse(fs.readFileSync('./channeld.json' , 'utf8'));
let antiban = JSON.parse(fs.readFileSync('./antiban.json' , 'utf8'));
let antiroleD = JSON.parse(fs.readFileSync('./antiroleD.json' , 'utf8'));
let antiroleC = JSON.parse(fs.readFileSync('./antiroleC.json' , 'utf8'));
let antikick = JSON.parse(fs.readFileSync('./antikick.json' , 'utf8'));
client.login("")
client.on("ready", () => {
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
    console.log(client.guilds.cache.map(c => `${c.name} : ${c.me.hasPermission(8)} : ${c.memberCount}`));
  client.user.setActivity( `${prefix}help | PROTECT SERVER YOURSELF VERSION 12.4.0 | SERVERS ${client.guilds.cache.size} | Users ${client.users.cache.size} `);
  console.log(`Logined`);
});

let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => {
            if(message.content.startsWith(prefix + "tAntihack on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antihack[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle Security is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antihack[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tAntihack off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );   
        antihack[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle Security is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antihack[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tChannelC on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        channelc[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelC is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channelc[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./channelc.json", JSON.stringify(channelc), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tChannelC off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        channelc[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelC is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channelc[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./channelc.json", JSON.stringify(channelc), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tChannelD on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        channeld[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelD is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channeld[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./channeld.json", JSON.stringify(channeld), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tChannelD off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        channeld[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelD is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channeld[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./channeld.json", JSON.stringify(channeld), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tban on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' ); 
        antiban[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ban is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiban[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antiban.json", JSON.stringify(antiban), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tban off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antiban[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ban is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiban[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antiban.json", JSON.stringify(antiban), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tkick on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' ); 
        antikick[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle kick is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antikick[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antikick.json", JSON.stringify(antikick), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "tkick off")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antikick[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle kick is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antikick[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antikick.json", JSON.stringify(antikick), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "troleD on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );     
        antiroleD[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle roleD is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleD[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antiroleD.json", JSON.stringify(antiroleD), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "troleD off")) {
                if(!message.channel.guild) return;
                         if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antiroleD[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle antiRoleD is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleD[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antiroleD.json", JSON.stringify(antiroleD), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "troleC on")) {
                if(!message.channel.guild) return;
                                       if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );     
        antiroleD[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle roleC is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleC[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)       
                        fs.writeFile("./antiroleC.json", JSON.stringify(antiroleC), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('message', message => {
            if(message.content.startsWith(prefix + "troleC off")) {
                if(!message.channel.guild) return;
                         if(message.member.id !== message.guild.ownerID) return message.channel.send('**Sorry But You Dont Have** `OWNERSHIP`' );
        antiroleC[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new Discord.MessageEmbed()
                      .setTitle('**✅Done Check The Toggle antiRoleC is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleC[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send(embed)                  
                    fs.writeFile("./antiroleC.json", JSON.stringify(antiroleC), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })

let banse = new Set();
  let bane = JSON.parse(fs.readFileSync('security1.json' , 'utf8'));//require data1.json
  let data = JSON.parse(fs.readFileSync('security.json' , 'utf8'));//require data.json
  client.on('guildBanAdd', function(guild) {
    guild.fetchAuditLogs().then(logs => {
      const ser = logs.entries.first().executor;
      if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
        bans: 2
      }
      if (!antiban[guild.guild.id])
      antiban[guild.guild.id] = {
        onoff: "Off"
      };
          if (antiban[guild.guild.id].onoff === "Off") return; 
      if(antihack[guild.guild.id].onoff === 'Off') return;
      let boner = bane[ser.id+guild.id]
  banse.add(ser.id)
  boner.bans = Math.floor(boner.bans+1)
 
 
  setTimeout(() => {
    boner.bans = 2
    banse.delete(ser.id)
  },8000)
 
  if(boner.bans > 2) {
    let roles = guild.members.cache.get(ser.id).roles.array()
  guild.members.cache.get(ser.id).roles.remove(roles)
  }
 
      })
      fs.writeFile("security1.json", JSON.stringify(bane), (err) => {
  if (err) console.error(err);
  })
 
  })
client.on('guildMemberRemove', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `MEMBER_KICK`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            }; 
            if (!antikick[guild.guild.id])
      antikick[guild.guild.id] = {
        onoff: "Off"
      };
          if (antikick[guild.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {  
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  });
client.on('roleDelete', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `ROLE_DELETE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
      if (!antiroleD[u.guild.id])
      antiroleD[u.guild.id] = {
        onoff: "Off"
      };
    if (antiroleD[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
 
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      }); 
  });
 
client.on('roleCreate', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `ROLE_CREATE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
                if (!antiroleC[u.guild.id])
      antiroleC[u.guild.id] = {
        onoff: "Off"
      };
    if (antiroleC[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
 
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      }); 
  });
 
 client.on('channelDelete', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `CHANNEL_DELETE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
     if (!channeld[u.guild.id])
      channeld[u.guild.id] = {
        onoff: "Off"
      };
    if (channeld[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  })
client.on('channelCreate', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `CHANNEL_CREATE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
           if (!channelc[u.guild.id])
      channelc[u.guild.id] = {
        onoff: "Off"
      };
    if (channelc[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  })
var antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8"));
let saveAbot = () => {
  fs.writeFileSync(
    "./antibots.json",
    JSON.stringify(antibots, null, 2),
    err => {
      if (err) throw err;
    }
  );
};
client.on("message", message => {
  if (!message.guild) return;
  if (!antibots[message.guild.id])
    antibots[message.guild.id] = {
      onoff: "on"
    };
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**🔐 Sorry just For Owner ship**"
      );
    antibots[message.guild.id] = {
      onoff: "on"
    };
    saveAbot();
    message.channel.send("**AntiBots Join Is On 🔐 **");
  }
  if (message.content.startsWith(prefix + "antibots off")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send(
        "**🔐 Sorry Just For owner ship**"
      );
    antibots[message.guild.id] = {
      onoff: "off"
    };
    saveAbot();
    message.channel.send("**AntiBots Join Is Off 🔓 **");
  }
  saveAbot();
});
 client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  saveAbot();
  })
  

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | **Please wait for ${cdtime} second**`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor("RED")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setThumbnail(message.guild.iconURL()).setDescription(`
      
[Click To Invite](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975)  
**The Prefix is a (m!)**
**General**
 botinfo,server,ping,user
**Moderation**
ban,kick,mute,unmute,bans,
unban,unban all,clear,lock,unlock,close,open,setLog,rules,move,help move

 **Security**
 tAntihack [on/off]
 tchannelc [on/off]
 tchanneld [on/off]
 troleD [on/off]
 troleC [on/off]
 tban [on/off]
 tkick [on/off]
 antibots [on/off]
 
  **Other**
support,invite

[Support Server](https://discord.gg/zqgxs7RJpQ) 
`);
    message.channel.send(help);
  }
});

client.on("message", message => {
    if (message.content.startsWith(prefix + "rules")) {
      if (!message.member.hasPermission("MANAGE_GUILD")) return;
     const blackjack = new Discord.MessageEmbed() 
         .setColor("BLACK")
         .setTitle("RULES")
         .setImage("https://media.discordapp.net/attachments/644265220449107968/646324616536784897/image0-16.png")
         .setFooter("RULES")
         .setDescription(`
**__Rules|یاسا__**
 
سەرتا سلاو تان لێبێ 
ئێمە وەک هەریەک لە سێرڤەرەکانی کە یاسای تایبەت بە خۆمان هەیە 
1. نابێت قسەی ناشیاو یان جنێوێکێک بدەی چونکە یەکسەر باندت ئەکەین
2. نابێت لە ڤۆیسی گشتی بۆت بەکاربێنن
3. ریکلام کردن بە هەموو شێوەک قەدەخەیە جگە لە گۆرینەوەی
4. نابێت بە هیچ شێوەیەک بێرێزی بە تاکێکی ستافەکە بکەیت
5. بێزارکردنی پلەیەر و میوان قەدەخەیە
6. باسکرنی سیاسەت بە هەموو شێوەیەک قەدەخەیە
7. شارچێتی قەدەخەیە
8. سوکایەتی کردن بە یەک قەدەخەیەو یەکسەر باندە
9. زۆر دووبارە کردنەوەی مەسج یاجود سپام کردن قەدەخەیە
لەگەل رێزماندا....!
   `)
   message.channel.send(blackjack)
 
   }
   });

client.on("message", message => {
  if (message.content.startsWith(prefix + "move")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user) return message.channel.send(`**>>> ${prefix}move <@mention or id>`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
        message.channel.send(
          `**${user.user.username}** has been moved to **${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
  if (message.content.toLowerCase() === prefix + "help move") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: move`)
      .addField("Usage", `${prefix}move @user`)
      .addField("Information", "move members");
    message.channel.send(move);
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`✅  **-** **Done Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          ` :x: **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "lock")) {
    let blackjack = "created by black jack";
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permissions**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("** locked Channel :lock:**")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        return message.channel.send(embed);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "unlock")) {
    let blackjack = "created by black jack";
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("** Unlocked Channel 🔓**")
          .addField("Guild name", message.guild.name)
          .addField("Channel", message.channel.name)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM");
        return message.channel.send(embed);
      });
  }
});
client.on("message", message => {
  if (message.content === prefix + "close") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel hided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔒");
    });
  }
});
client.on("message", message => {
  if (message.content === prefix + "open") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**Channel unhided**")
      .addField("Guild name", message.guild.name)
      .addField("Channel", message.channel.name)
      .addField("Moderation", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("🔓");
    });
  }
});

client.on('message', message => {
 
if(message.content.startsWith(prefix + "mute")) {
if(!message.member.hasPermission('MUTE_MEMBERS'))  return message.channel.send(" **you need the** ``MUTE_MEMBERS `` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  var role = message.guild.roles.cache.find(role => role.name === "Muted")
  let mute = new Discord.MessageEmbed()
  .setAuthor(message.author.username,message.author.avatarURL())
.setDescription(`**${mention} | Has been Muted From The Server! **`)
   .setColor('#000000')
.setTimestamp()
 
  .setFooter(mention.user.username,mention.user.avatarURL())
   mention.roles.add(role)
  message.channel.send(mute)
}});
 
 
 
 
client.on('message', message => {
 
if(message.content.startsWith(prefix + "unmute")) {
if(!message.member.hasPermission('MUTE_MEMBERS'))  return message.channel.send(" **you need the** ``MUTE_MEMBERS `` **permission!**").then(msg => msg.delete(3000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))   return message.channel.send(  " **I need the** ``Mange_Messages ``  **permission!** ").then(msg => msg.delete(3000));
var mention= message.mentions.members.first()
  if(!mention) return message.channel.send(`** MENTION SOMEONE : :no_entry_sign: **`)
  var role = message.guild.roles.cache.find(role => role.name === "Muted")
  let unmute = new Discord.MessageEmbed()
  .setAuthor(message.author.username,message.author.avatarURL())
.setDescription(`**${mention} | Has been UnMuted From The Server! **`)
    .setColor('#000000')
.setTimestamp()
 
  .setFooter(mention.user.username,mention.user.avatarURL())
   mention.roles.remove(role)
  message.channel.send(unmute)
}});
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    if (!message.channel.guild) return;
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    const embed = new Discord.MessageEmbed()
        .setThumbnail(heg.avatarURL())
        .addField("**ID**", `${heg.id}`, true)
        .addField("**Name**", `${heg.username}`, true)
        .addField('**Discrim Account**',"**#" +  `${heg.discriminator}**`,true)
        .addField("**Created Account At**", `${heg.createdAt}`, true)
        .addField("**Time Join Server**", message.member.joinedAt.toLocaleString())    
        .addField("**Bot**", `${heg.bot}`, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM")     
        .setFooter("BLACK SESTAM");
 
    message.channel.send(embed);
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "ban")) {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You dont have premission")
    let tag = message.mentions.members.first();
    if(!tag) return ('**Aw kasa La server nya**')
    let args = message.content.split(" ").slice(1); 
    if(!args) return message.channel.send('**Kasek Menition bka Ya id member**')
    var blackjack = 'Black sestam'
    const ban = new Discord.MessageEmbed()
    .setTitle('**Banned In a Server**')
    .addField('Guild', message.guild.name)
    .addField('Name member ban', tag)
    .addField('Moderation', message.author.tag)
    .setFooter('BLACK SESTAM')
    .setColor("RANDOM")
    message.channel.send(ban)
    tag.ban();
  }})
client.on("message", message => {
  if (message.content.startsWith(prefix + "kick")) {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You dont have premission**")
    let tag = message.mentions.members.first();
    if(!tag) return ('**Aw kasa La server nya**')
    let args = message.content.split(" ").slice(1); 
    if(!args) return message.channel.send('**Kasek Menition bka Ya id member**')
    var blackjack = 'Black sestam'
    const kick = new Discord.MessageEmbed()
    .setTitle('**Kicked In a Server**')
    .addField('Guild', message.guild.name)
    .addField('Name member ', tag)
    .addField('Moderation', message.author.tag)
    .setFooter('BLACK SESTAM')
    .setColor("RANDOM")
    message.channel.send(kick)
    tag.kick();
  }})

client.on("message", message => {
if (message.content.startsWith(prefix + "botinfo")) {
message.channel.send({
embed: new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setColor("#00F0FF")
.setTitle("INFO |__=_=__|")
.addField(
"``My Ping``",
[`${Date.now() - message.createdTimestamp}` + "MS"],
true
)
.addField("``servers``", [client.guilds.cache.size], true)
.addField("``channels``", `[ ${client.channels.cache.size} ]`, true)
.addField("``Users``", `[ ${client.users.cache.size} ]`, true)
.addField("``My Name``", `[ ${client.user.tag} ]`, true)
.addField("``My ID``", `[ ${client.user.id} ]`, true)
.addField("``My Prefix``", `[ ${prefix} ]`, true)
.addField("``My Language``", `[ JavaScript ]`, true)
.addField("``Bot Version``", `[ 12.4.0 ]`, true)
});
}
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});
client.on("message", async message => {
  if (
    message.content.includes(
      "ker",
      "qn",
      "qwz",
      "Kerm",
      "Ker",
      "kerm",
      "maza",
      "daykt bgem",
      "xwshkt bgem",
      "nank hiz",
      "bgem"
    )
  ) {
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.cache.find(
      role => role.name === `Muted By BlackSestam`
    );
    if (!muterole) {
      try {
        muterole = await message.guild.roles.create({
          name: "Muted By BlackSestam",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.updateOverwrite(muterole, {
            SEND_TTS_MESSAGES: false,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            VIEW_CHANNEL: false,
            SPEAK: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    message.member.roles.add(muterole);
    const embed500 = new Discord.MessageEmbed()
      .setTitle("Muted Ads")
      .addField(`**  You Have Been Muted **`, `**Reason : Uses badword**`)
      .setColor("c91616")
      .setThumbnail(message.author.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});

 client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "bans") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(error => {
        message.channel.send(error.message);
      });
  }
  if (message.content.toLowerCase() === prefix + "hbans") {
    let unban = new Discord.MessageEmbed()
      .setTitle(`Command: bans `)
      .addField("Usage", `${prefix}bans`)
      .addField("Information", "bans count");
    message.channel.send(unban);
  }
});
client.on("message", black => {
  if (black.content.startsWith(prefix + "server")) {
    if (cooldown.has(black.author.id)) {
      return black.channel
        .send(`:stopwatch: | Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }

    cooldown.add(black.author.id);

    setTimeout(() => {
      cooldown.delete(black.author.id);
    }, cdtime * 1000);
    var blackjack = new Discord.MessageEmbed()
      .setAuthor(black.guild.name)
      .setThumbnail(black.guild.iconURL())
      .setTitle("**Info Server**")
      .addField("**Server Name:**", `${black.guild.name}`)
      .addField("**Owner Server:**", `<@${black.guild.ownerID}>`)
      .addField("**Server ID:**", `${black.guild.id}`)
      .addField("**Created:**", `${black.guild.createdAt.toLocaleString()}`)
      .addField("**Emojis**", `${black.guild.emojis.cache.size}`, true)
      .addField("**Members:**", `${black.guild.memberCount}`)
      .addField("**Channels:**", `${black.guild.channels.cache.size}`)
      .addField("**Region**:", `${black.guild.region}`)
      .addField(`**Boosts**`, `${black.guild.premiumSubscriptionCount}`, true)
      .addField("**Roles:**", ` ${black.guild.roles.cache.size}`)
      .addField("AFK Timeout", black.guild.afkTimeout / 60 + ' minutes', true)
      .setFooter(`Requested | ${black.author.tag}`, black.author.avatarURL())
      .setColor("RANDOM")
      .setTimestamp();
    black.channel.send(blackjack);
  }
});



client.on('message', message => {
  if(message.content.startsWith(`${prefix}support`)){
    var embed = new Discord.MessageEmbed()
    .setTitle("Click Here")
    .setURL("")
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send("**Check Your DM**")
    message.author.send({embed})
  }
});
client.on('message', message => {
  if(message.content.startsWith(`${prefix}invite`)){
    var embed = new Discord.MessageEmbed()
    .setTitle("Click Here")
    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`)
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send("**Check Your DM**")
    message.author.send({embed})
  }
});
var log = require("./log.json");
function saveLog() {
    fs.writeFileSync("./log.json", JSON.stringify(log, null, 4));
}
client.on('message', message => {
           if (!message.channel.guild) return;
    let room = message.content.split(' ').slice(1).join(" ")
    let channel = message.guild.channels.cache.find(c => c.name === `${room}`) || message.mentions.channels.first()
    if(message.content.startsWith(prefix + "setLog")) {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('**Please Type The Name Channel Or Mention**')
if(!channel) return message.channel.send('**Cant Find This Channel**')
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setTitle('**✅Done Check The Log Code Has Been Setup**')
.addField('Channel', `${room}`)
.addField('Server', `${message.guild.name}`)
.addField('Requested By', `${message.author}`)
.setColor("RANDOM")
.setFooter(`${client.user.username}`)
.setTimestamp()
message.channel.send(embed)
log[message.guild.id] = {
channel: channel.name,
}
saveLog()
}})
 
client.on("message", message => {
  if (message.content.startsWith(prefix + "togglelog")) {
    if (!message.channel.guild) return message.reply("**This Command For Serverr**");
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author}, Sorry You Need \`MANAGE_GUILD\` for use this command`);
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "off") return [
      message.channel.send(`**The log Is __𝐎𝐍__ !**`),
      (log[message.guild.id].onoff = "on")
    ];
    if (log[message.guild.id].onoff === "on") return [
      message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
      (log[message.guild.id].onoff = "off")
    ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.cache.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;
 
  let messageDelete = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL());
 
  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.cache.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldMessage.content.startsWith("https://")) return;
 
  let messageUpdate = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.displayAvatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL());
 
  logChannel.send(messageUpdate);
});
 
client.on("channelCreate", channel => {
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
    let channelCreate = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setColor("GREEN")
      .setFooter(channel.guild.name, channel.guild.iconURL());
    logChannel.send(channelCreate)
  })
});
 
 
 
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.cache.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }
 
  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
 
      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
          "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
          "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
          oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
 
      logChannel.send(newTopic);
    }
  });
});
 
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let channelDelete = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL());
 
    logChannel.send(channelDelete);
  });
});
 
 
 
 
 
 
 
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
 
    let banInfo = new Discord.MessageEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());
 
    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
 
    let unBanInfo = new Discord.MessageEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());
 
    logChannel.send(unBanInfo);
  });
});
 
 
 
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
    let roleCreate = new Discord.MessageEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());
 
    logChannel.send(roleCreate);
  });
});
 
 
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let roleDelete = new Discord.MessageEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());
 
    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.cache.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;
 
  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.MessageEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
 
      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.MessageEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
 
      logChannel.send(roleUpdateColor);
    }
  });
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
	if(!oldMember.guild) return;
		        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldMember.guild.id].onoff === 'Off') return;
	var logChannel = oldMember.guild.channels.cache.find(c => c.name === `${log[oldMember, newMember.guild.id].channel}`);
	if(!logChannel) return;
 
	oldMember.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL();
		var userTag = logs.entries.first().executor.tag;
 
		if(oldMember.nickname !== newMember.nickname) {
			if(oldMember.nickname === null) {
				var oldNM = '`Old Name`';
			}else {
				var oldNM = oldMember.nickname;
			}
			if(newMember.nickname === null) {
				var newNM = '`New Name`';
			}else {
				var newNM = newMember.nickname;
			}
 
			let updateNickname = new Discord.MessageEmbed()
			.setTitle('**[UPDATE MEMBER NICKNAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldMember.guild.name, oldMember.guild.iconURL())
 
			logChannel.send(updateNickname);
		}
		if(oldMember.roles.size < newMember.roles.size) {
			let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
					        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
            if(log[oldMember.guild.id].onoff === 'Off') return;
			let roleAdded = new Discord.MessageEmbed()
			.setTitle('**[ADDED ROLE TO MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL())
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(roleAdded);
		}
		if(oldMember.roles.size > newMember.roles.size) {
			let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
					        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
 }
            if(log[oldMember.guild.id].onoff === 'Off') return;
			let roleAdded = new Discord.MessageEmbed()
			.setTitle('**[ADDED ROLE TO MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL())
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(roleAdded);
		}
		if(oldMember.roles.size > newMember.roles.size) {
			let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
					        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
            if(log[oldMember, newMember.guild.id].onoff === 'Off') return;
			let roleRemoved = new Discord.MessageEmbed()
			.setTitle('**[REMOVED ROLE FROM MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL())
			.setColor('RED')
			.setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(roleRemoved);
		}
	})
  if(oldMember.guild.ownerID !== newMember.guild.ownerID) {
	  		        if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
        if(log[oldMember, newMember.guild.id].onoff === 'Off') return;
        let newOwner = new Discord.MessageEmbed()
		.setTitle('**[UPDATE GUILD OWNER]**')
		.setThumbnail(oldMember.guild.iconURL())
		.setColor('GREEN')
		.setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
		.setTimestamp()
		.setFooter(oldMember.guild.name, oldMember.guild.iconURL())
 
		logChannel.send(newOwner);
	}
});
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
	if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
    if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
	var logChannel = voiceOld.guild.channels.cache.find(c => c.name === `${log[voiceOld, voiceNew.guild.id].channel}`);
	if(!logChannel) return;
 
	voiceOld.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userTag = logs.entries.first().executor.tag;
		var userAvatar = logs.entries.first().executor.avatarURL();
 
		if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
			let serverMutev = new Discord.MessageEmbed()
			.setTitle('**[VOICE MUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
			.setColor('RED')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(serverMutev);
		}
		if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
		  			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
			let serverUnmutev = new Discord.MessageEmbed()
			.setTitle('**[VOICE UNMUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
			.setColor('GREEN')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(serverUnmutev);
		}
		if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
		  			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
			let serverDeafv = new Discord.MessageEmbed()
			.setTitle('**[VOICE DEAF]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
			.setColor('RED')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(serverDeafv);
		}	
if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
		  			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
			let serverUndeafv = new Discord.MessageEmbed()
			.setTitle('**[VOICE UNDEAF]**')
			.setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
			.setColor('GREEN')
			.setDescription(`**User:** ${voiceOld} (ID: ${voiceOld.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)
 
			logChannel.send(serverUndeafv);
		}
	})
 
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
	  			        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
        if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
		let voiceLeave = new Discord.MessageEmbed()
		.setTitle('**[CHANGED VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL())
		.setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL())
 
		logChannel.send(voiceLeave);
	}
});

   
