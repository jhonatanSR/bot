const { Client, Intents} = require('discord.js');
const jimp = require ('jimp');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS] });
const config = require("./config.json");

client.on("ready",() => {
    console.log(`Béééééééééééééé ,numeros de membros: ${client.users.cache.size}, numeros de canais: ${client.channels.cache.size}, numero de guilds: ${client.guilds.cache.size}`);

    client.user.setActivity(`Bééé Servidores: ${client.guilds.cache.size}`);
});


client.on("guildMemberAdd", async membro => {
    const canal = client.channels.cache.get("207337368917639170");
    canal.send(`Seja bem vindo! ${membro.user}`);
    canal.send(`${membro.user.avatarURL()}`);

});


client.on("guildMemberRemove", async membro =>{
    const canal = client.channels.cache.get("207337368917639170");
    canal.send(`Receba!!! ${membro.user}`);
});


client.on("guildCreate", guild =>{
    console.log(`Béééé entrou nos servidores: ${guild.name} (id: ${guild.id}), População: ${guild.memberCount} membros`);
    client.user.setActivity(`Bééé estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildDelete", guild =>{
    console.log(`Béééééé, Bot foi removido de: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Bééé estou em ${client.guilds.cache.size} servidores`);
});

client.on("messageCreate", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "DM") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando === "ping" || comando ==="ms"){
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! A latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);
    }

    if(comando === "roll"){
        const menor = Math.ceil(1);
        const maior = Math.floor(100);
        const m = await message.channel.send(`${message.author.username} Número sorteado: ${Math.round(Math.random() * (maior - menor) + menor)}`);
    }

    if(comando === "membros"){
        
        console.log(client.fetchGuildPreview("207337368917639170"));
        
    }

    if(comando ==="play"){
        
    }

});



client.login(config.token);