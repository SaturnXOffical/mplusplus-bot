

const Discord = require('discord.js')
const client = new Discord.Client();



client.on('message', message=>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    

    const args = message.content.slice(prefix.length).split(/ +/);    // args system, this is important dont delete
    const command = args.shift().toLowerCase();       // shifts the command to lowercase!!
    
    if(command === 'god help me'){

    }
});