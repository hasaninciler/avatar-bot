const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'serverinfo',
  usage: "/serverinfo",
  description: 'Shows guild info',
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

     run: async (client, interaction) => {
        const guild = interaction.guild
        const owner = await interaction.guild.fetchOwner();
        let guildDescription = interaction.guild.description
    if (!guildDescription) {
      guildDescription = 'None'
    }

    const embed = new MessageEmbed()
    .setTitle('Server Info')
    .setDescription('Returns information about the server.')
    .setImage(interaction.guild.bannerURL({size: 1024, format: (interaction.guild.bannerURL().includes("a_")) ? "gif" : "webp"}))
    .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024}))
    .addFields({
                name: 'Name',
                value: guild.name,
                inline: true
              },
              {
                name: 'ID',
                value: guild.id,
                inline: true
              },
              {
                name: 'Description',
                value: guildDescription,
                inline: true
              },
              {
                name: 'Created at',
                value: guild.createdAt.toDateString(),
                inline: true
              },
              {
                name: 'Owner',
                value: owner.user.tag,
                inline: true
              },
              {
                name: 'Member Count',
                value: guild.memberCount.toString(),
                inline: true
              },
              {
                name: 'Boosts',
                value: guild.premiumSubscriptionCount.toString(),
                inline: true
              },
              {
                name: 'Boost Level',
                value: guild.premiumTier,
                inline: true
              })

    interaction.reply({ embeds: [embed] })
    },
};