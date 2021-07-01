
console.log('starting up bot')

const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = '?'

const botcodever = '1.3'

const role = '850968859434680381'

const token = ''

client.on('message', message=>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    

    const args = message.content.slice(prefix.length).split(/ +/);    // args system, this is important dont delete
    const command = args.shift().toLowerCase();       // shifts the command to lowercase!!
    
    if(command === 'vc'){
        if(message.member.roles.cache.has(role)){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('VC Redist')
        .setDescription('Windows 64bit: https://aka.ms/vs/16/release/vc_redist.x64.exe \nWindows 32bit: https://aka.ms/vs/16/release/vc_redist.x86.exe')
        .setColor('random')
        )
    } else message.reply('Only staff can run that!')
    } else if(command === 'git'){
        if(message.member.roles.cache.has(role)) {
        message.channel.send('https://github.com/PyroCalzone/MechVibesPlusPlus')
    } else message.reply('Only staff can run that!')
    } else if(command === 'download'){
        if(message.member.roles.cache.has(role)) {
        message.channel.send('github.com/PyroCalzone/MechVibesPlusPlus/releases/latest')
    } else message.reply('Only staff can run that!')


    } else if(command === 'mvibes'){
        if(message.member.roles.cache.has(role)) {
        message.channel.send('https://mechvibes.com/')
    } else message.reply('Only staff can run that!')
    }

});


client.on('ready', async () => {
    console.log('bot is online')
    console.log(`version is on ${botcodever}`)
});


client.login(token);  
