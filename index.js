const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
var count = 0;
var qmax = 6;

const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("YOU GOT THIS!!", {type:"CUSTOM_STATUS"});
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    //let other = messageArray;
    let args = messageArray.slice(1);
    //let texter = messageArray.join(" ");

    if(cmd === `${prefix}hi`){
        return message.channel.send("hi")
    }

    
})

bot.login(botsettings.token);
