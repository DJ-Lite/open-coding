const discord = require("discord.js")
const {EmbedBuilder,AttachmentBuilder,ButtonBuilder,ActionRowBuilder, ActivityType} = discord
const gib = discord.GatewayIntentBits
const p = discord.Partials
const config = bot.config
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
module.exports = (client) => {
    client.guilds.cache.forEach( (guild) => {
    const welcomechannel = config.Events.Welcome.ChannelId // welcome channel
    const role = config.Events.Welcome.GivingRole
    
    client.on('guildMemberAdd', (member) => {
        var welcomeEmbed = new EmbedBuilder() // You can change "ExampleEmbed" to what you want
            .setColor(config.color) // Only hexcolors
            .setTitle(config.Events.Welcome.EmbedMessage.Title) //This is the title of your embed    
            .setDescription(config.Events.Welcome.EmbedMessage.Description)// **User:** "+user.tag
            .setThumbnail(member.displayAvatarURL())
            .setImage(config.Events.Welcome.EmbedMessage.Image)
            .setFooter(config.Events.Welcome.EmbedMessage.Footer)
            .setTimestamp()
      
    const message1 = `Welcome <@${member.id}> to **<@${guild.name}>**. We have now **${guild.memberCount}** members`
    const channel = member.guild.channels.cache.get(welcomechannel)

    channel.send(message1)
    channel.send({embeds:[welcomeEmbed]})
    
    member.roles.add(role);
    console.log('User: ' + member.user.username +' has joined the server!');

    var channel1 = member.guild.channels.cache.find((channel) => channel.id == config.Events.Welcome.Logs)
    if (!channel1){
        //error
        return
    }
    
    var logEmbed = new EmbedBuilder() // You can change "ExampleEmbed" to what you want
    .setColor(config.color) // Only hexcolors
    .setTitle("User joined") //This is the title of your embed    
    .setDescription("> **User:** "+member.user.tag)
    .setThumbnail(member.displayAvatarURL())
    channel1.send({embeds:[logEmbed]})

    
});
    })
}

