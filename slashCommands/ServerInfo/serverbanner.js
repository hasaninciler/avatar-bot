const { MessageEmbed, CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "serverbanner",
    description: "Shows guild banner",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */


    run: async (client, interaction) => {
        const embed = new MessageEmbed()
            .setTitle(`${interaction.guild.name}, Server Banner`)
            .setColor('BLUE')
            .setImage(interaction.guild.bannerURL({size: 1024, format: (interaction.guild.bannerURL().includes("a_")) ? "gif" : "webp"}))
            interaction.reply({embeds: [embed]})

        ;
    }
}