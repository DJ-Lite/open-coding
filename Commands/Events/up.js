const bot = require("../index")
const discord = require("discord.js")
const {EmbedBuilder,AttachmentBuilder,ButtonBuilder,ActionRowBuilder, ActivityType} = discord
const config = bot.config
const client = bot.client

module.exports = () => {
    client.on("interactionCreate",(interaction) => {
        if (!interaction.isChatInputCommand()) return
        if (interaction.commandName != "up") return
    
        var ExampleEmbed = new EmbedBuilder() 
        .setColor(config.color) 
        .setTitle("Your bot can be used")   
        .setTimestamp() 
        interaction.reply({embeds:[ExampleEmbed], ephemeral: true})
    
    })};
    
