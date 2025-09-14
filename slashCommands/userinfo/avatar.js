const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  usage: "/avatar (member)",
  description: "Shows users avatar",
  options: [
    {
      name: "member",
      type: "USER",
      description: "Select a user",
      required: true,
    },
  ],
  /**
   *
   * @param { MessageEmbed } message
   * @param { CommandInteraction } interaction
   * @param {Client} client
   */

   
  run: async (client, interaction) => {
    const metiuw = interaction.options.getUser("member");
    const metiuwembed = new MessageEmbed()
      .setTitle(`${metiuw.tag}'s Avatar`)
      .setColor("BLUE")
      .setImage(
        metiuw.displayAvatarURL({
          dynamic: true,
          size: 1024,
        })
      );
    interaction.reply({ embeds: [metiuwembed] });
  },
  //metiuw
};
