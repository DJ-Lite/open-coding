const bot = require("../index")
const discord = require("discord.js")
const {EmbedBuilder} = discord
const config = bot.config
const client = bot.client

module.exports = () => {
    client.on("interactionCreate",(interaction) => {
        if (!interaction.isChatInputCommand()) return
        if (interaction.commandName != "verify") return
        
        var channel = interaction.guild.channels.cache.find((role) => role.id == config.Verification.AddRoles)
        if (!addroles){
            return
        }

        const removeroles = interaction.guild.channels.cache.find((role) => role.id == config.Verification.RemoveRoles)
        if (!removeroles){
            return
        }
        const member = interaction.member;
        
        var verifyEmbed = new EmbedBuilder()
        .setColor(config.color) 
        .setTitle("Verified") 
        .setDescription("You are now verified") 
        .setTimestamp() 

        member.roles.add(addroles)
        if (!addroles){
            return
        }

        member.roles.remove(removeroles)
        if (!removeroles){
            return
        }
        
        interaction.reply({embeds:[verifyEmbed], ephemeral: true})

        var channel = interaction.guild.channels.cache.find((channel) => channel.id == config.Verification.Logs)
        if (!channel){
            return
        }
        var logEmbed = new EmbedBuilder()
        .setColor(config.color)
        .setTitle("User Verified")
        .setDescription("> **User:** "+member.user.tag+"\n> " + "> **Creation Date**"+ member.user.createdAt )
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter({text:member.user.tag, iconURL: member.user.displayAvatarURL()})
        .setTimestamp()

        channel.send({embeds:[logEmbed]})
})}
