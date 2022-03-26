const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
var count = 0;
var qmax = 6;
var users = ["307681857808629762", "493186675015417876"];
var todo = [[" "],[" "]];
var quotes=["\“When you have a dream, you’ve got to grab it and never let go.\”\n-Carol Burnett" , "\"Nothing is impossible. The word itself says ‘I’m possible!'\”\n— Audrey Hepburn"];


const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("YOU GOT THIS!!", {type:"CUSTOM_STATUS"});
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];//t!cmd
    //let other = messageArray;
    let args = messageArray.slice(1); //this           is           a           test
    let texter = messageArray.join(" "); //t!texter this is a test
    let part = messageArray.slice(1).join(" "); //this is a test


   

    if(cmd === `${prefix}test`){
        return message.channel.send(user.indexOf("")) 
    }

    if(cmd === `${prefix}hi`){
        var isitin = false;
        return message.channel.send("Hello "+ message.author.username + "!") 
    }
    if(cmd === `${prefix}todo`){
        var userspot = users.indexOf(message.author.id);
        list = "Don't forget to: \n";
        for(var i =1; i<todo[userspot].length; i++){
            list = list + (i) + ". " + todo[userspot][i] + "\n";
        }

        return message.channel.send(list);
    }
    if(cmd === `${prefix}add`){
        var userspot = users.indexOf(message.author.id);
        todo[userspot].push(part)
        return message.channel.send("Added: " + part) 
    }
    if(cmd === `${prefix}done`){
        var userspot = users.indexOf(message.author.id);
        task = todo[userspot][messageArray[1]]
        todo[userspot] = todo[userspot].filter(item => item != task);
        return message.channel.send("Good job on finishing " + task + "!") 
    }
    if(cmd === `${prefix}gm`){
        var temp = Math.floor(Math.random() * quotes.length);
        var userspot = users.indexOf(message.author.id);
        list = "";
        for(var i =1; i<todo[userspot].length; i++){
            list = list + (i) + ". " + todo[userspot][i] + "\n";
        }

        const goodmorning = new Discord.MessageEmbed()
        .setTitle("Good Morning, "+ message.author.username+"!")
        .setColor(0x00AE86)
        .addFields(
            { name: '**Your To-Do List:**', value: list, inline:false },
            { name: '**The quote of the day:**', value: '`' + quotes[temp] + '`', inline:false }
	        );
    
        return message.channel.send(goodmorning);

    }
 
}) 

bot.login(botsettings.token);