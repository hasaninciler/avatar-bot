const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "servericon",
    description: "return servericon",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`${interaction.guild.name}, Server Icon` )
            .setColor('BLUE')
            .setImage(interaction.guild.iconURL({ dynamic: true, size: 1024}))
            interaction.reply({embeds: [embed]})
        ;
    }
}