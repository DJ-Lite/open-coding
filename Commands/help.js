const bot = require("../index")
const discord = require("discord.js")
const {EmbedBuilder,AttachmentBuilder,ButtonBuilder,ActionRowBuilder, ActivityType} = discord
const config = bot.config
const client = bot.client


module.exports = () => {
    client.on("interactionCreate",(interaction) => {
        if (!interaction.isChatInputCommand()) return
        if (interaction.commandName != "help") return

        var helpEmbed = new EmbedBuilder() // You can change "ExampleEmbed" to what you want
        .setColor(config.color) // Only hexcolors
        .setTitle(config.Helpmenu.Title) //This is the title of your embed
        .setDescription(config.Helpmenu.Description) 
        .setImage(config.Helpmenu.Image) 
        .setFooter(config.Helpmenu.Footer)  
        .setTimestamp() // This is the time when the embed is send and that is standing below everything next to the foother
    
        interaction.reply({embeds:[helpEmbed]})
        console.log('User: ' + member.user.username +' used /help')
});
    
}