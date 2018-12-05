const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "519945050147520522"; // ايدي السررفر
var channel = "519958497081819136";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** Hi , Hi , Hi , Hi ,Hi ,Hi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,HiHi , Hi , Hi , Hi ,Hi Dreaaam , محمض ميضو لقمد نق محمض ميضو لقمد نق محمض ميضو القمد نق محمض ميضو لقمد نق #سيث رولنظ**')
    },305);
})



client.on('ready', async() => {
var server = "519945050147520522"; // ايدي السررفر
var channel = "519958497081819136";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})




client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});


client.login(process.env.BOT_TOKEN); 
client2.login(process.env.BOT_TOKEN2); 
