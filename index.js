const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const randomPuppy = require("random-puppy");

client.on("ready", () => {
    console.log("Bot is ready");
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if(command == "meme") {
        const subReddits = ["dankmeme", "meme"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`from r/${random}`)
        .setURL(`https://www.reddit.com/r/${random}/`)
        .setImage(img)
        message.channel.send(embed);
    }
});
client.login(config.token);
