const {
    MessageEmbed,
    CommandInteraction,
    Client,
    MessageButton,
    MessageActionRow
} = require("discord.js")
module.exports = {
    name: "developer",
    description: "My Developer Metiuw",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {MessageButton} MessageButton
     * @param {MessageActionRow} MessageActionRow
     */
     run: async (client, interaction) => {
        const row = new MessageActionRow()
          
            .addComponents(
                new MessageButton()
                .setLabel("My Developer")
                .setStyle("LINK")
                .setEmoji("983368462892142603")
                .setURL(`https://discord.com/users/678514481772494898`)
            )
            
        await interaction.reply({
            content: `If you found a bug in the bot or have a suggestion for the bot, you can contact my developer. You can reach my software developer by clicking the button below.`,
            components: [row],
        })
    }
}