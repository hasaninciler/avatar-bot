const {
    MessageEmbed,
    CommandInteraction,
    Client,
    MessageButton,
    MessageActionRow
} = require("discord.js")
module.exports = {
    name: "invite",
    description: "get my invite link",

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
                .setLabel("Invite Me!")
                .setStyle("LINK")
                .setEmoji("934416554114830396")
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=888741088913940511&permissions=8&scope=bot%20applications.commands`)
            )
            .addComponents(
                new MessageButton()
                .setLabel("My Developer")
                .setStyle("LINK")
                .setEmoji("1052984522368622822")
                .setURL(`https://discord.com/users/678514481772494898`)
            )
            .addComponents(
                new MessageButton()
                .setLabel("My Developer Github")
                .setStyle("LINK")
                .setEmoji("983368462892142603")
                .setURL(`https://github.com/metiuwu`)
            )
        await interaction.reply({
            content: `Hey You can invite the bot from the options below and check my developer`,
            components: [row],
        })
    }
}