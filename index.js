const discord = require("discord.js")
const {EmbedBuilder,AttachmentBuilder,ButtonBuilder,ActionRowBuilder, ActivityType,} = discord
const gib = discord.GatewayIntentBits
const p = discord.Partials
const emmitter = require('events').EventEmitter.defaultMaxListeners = 15;

const client = new discord.Client({
    intents:[
        gib.DirectMessages,
        gib.Guilds,
        gib.GuildMembers,
        gib.GuildMessages,
        gib.GuildInvites,
        gib.MessageContent
    ],
    partials:[p.Channel,p.Message]
})
exports.client = client


client.on("ready",() => {
    

const atc = discord.ApplicationCommandType
const acot = discord.ApplicationCommandOptionType

client.application.commands.create({
    name:"up",
    description:"See if the bot is online",
    type:atc.ChatInput
    
},config.serverID)

});
