const { MessageEmbed, Client } = require("discord.js");
const moment = require('moment');
const config = require("../../config.json");


module.exports = async (client, interaction) => {

  if (interaction.isCommand()) {
    const SlashCommands = client.slashCommands.get(interaction.commandName);
    if (!SlashCommands) return;
    let komutLog = client.channels.cache.get("1044693604955852871");
    if(komutLog) komutLog.send(`**[<t:${Math.floor(Math.floor(moment(Date.now())) / 1000)}:R>]** \`${interaction.member.author}\` tarafından \`${interaction.channel.name}\` kanalında \`${interaction.commandName}\` isimli komutu kullandı kullandı. | MESAJ İÇERİGİ! => \`${interaction.user}\` `)

     
    if (SlashCommands.owner && interaction.author.id !== `${client.owner}`) {
      await interaction
        .editReply({
          content: `Only <@678514481772494898> can use this command!`,
        })
        .catch(() => {});
    }

 
     
    if (SlashCommands.inVoiceChannel && !interaction.member.voice.channel) {
      await interaction
        .editReply({
          content: `You must be in a voice channel!`,
        })
        .catch(() => {});
    }
    if (
      SlashCommands.sameVoiceChannel &&
      interaction.member.voice.channel !== interaction.guild.me.voice.channel
    ) {
      await interaction
        .editReply({
          content: `You must be in the same channel as ${interaction.client.user}`,
        })
        .catch(() => {});
    }

     
    try {
      await SlashCommands.run(client, interaction);
    } catch (error) {
      if (interaction.replied) {
        await interaction
          .editReply({
            content: `An unexcepted error occured.`,
          })
          .catch(() => {});
      } else {
        await interaction
          .followUp({
            ephemeral: true,
            content: `An unexcepted error occured.`,
          })
          .catch(() => {});
      }
      console.error(error);
    }
  } else return;

   
};
