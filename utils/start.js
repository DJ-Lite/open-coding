const discord = require("discord.js")
const {Client, GatewayIntentBits, Partials } = require('discord.js')
const {REST, Route, ActivityType,} = discord

const client = new discord.Client({
    intents:[
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.MessageContent
    ],
    partials:[
        Partials.Channel,
        Partials.Message
    ]
})
var tempconfig = require("./config.json")
/**@type {Boolean} */
var isDevConfig = false

if (process.argv.some((v) => v == "--devconfig")){
    isDevConfig = true
    try{
    tempconfig = require("./devconfig.json")
    }catch{tempconfig = require("./config.json")}
}else{
    tempconfig = require("./config.json")
}

const config = tempconfig
exports.config = config

const config = require("../config.json");
const colors = require('colors/safe');

const welcome = require('../Commands/Events/welcome');
const { send } = require("process");

const logo = require("fs").readFileSync('./utils/start/logo.txt').toString()
const lijn = require("fs").readFileSync('./utils/start/1.txt').toString()
const name = require("fs").readFileSync('./utils/start/2.txt').toString()
const logs = require("fs").readFileSync('./utils/start/4.txt').toString()
const slashcommands = require("fs").readFileSync('./utils/start/3.txt').toString()

client.on("ready",() => {
    
    console.log(colors.blue(logo))
    console.log(lijn)
    console.log(colors.red.underline(name))
    console.log(`${client.user.tag } logged in`)
    console.log(colors.green.underline(slashcommands))
    console.log(colors.white.underline.bold(logs))
    welcome(client)


    client.user.setPresence({
        activities: [{ name: `you`, type: ActivityType.Listening }],
        status: 'online',
      });
     });



client.login(config.TOKEN);