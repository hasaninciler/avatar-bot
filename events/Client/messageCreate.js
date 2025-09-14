const { MessageEmbed } = require("discord.js");
const moment = require('moment');
module.exports = async (client, message) => {
   
  if (message.author.bot) return;
  if (!message.guild) return;
  let prefix = client.prefix;

   
  const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);

   
  if (message.content.match(mention)) {
    const embed = new MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(
        `**› My prefix in this server is \`${prefix}\`**\n**› You can see my all commands type \`${prefix}\`help**`
      );
    message.channel.send({ embeds: [embed] });
  }

   
   
  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const prefixRegex = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
  );
  if (!prefixRegex.test(message.content)) return;

  const [matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );
    let komutLog = client.channels.cache.get("1044693604955852871");
    if(komutLog) komutLog.send(`**[<t:${Math.floor(Math.floor(moment(Date.now())) / 1000)}:R>]** \`${message.author.tag}\` tarafından \`${message.channel.name}\` kanalında \`${commandName}\` isimli komutu kullandı kullandı. | MESAJ İÇERİGİ! => \`${message.content}\` `)

  if (!command) return;

  const embed = new MessageEmbed().setColor("RED");


  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nUsage: \`${prefix}${command.name} ${command.usage}\``;
    }

    embed.setDescription(reply);
    return message.channel.send({ embeds: [embed] });
  }

  if (
    command.permission &&
    !message.member.permissions.has(command.permission)
  ) {
    embed.setDescription("You can't use this command.");
    return message.channel.send({ embeds: [embed] });
  }

  if (command.owner && message.author.id !== `${client.owner}`) {
    embed.setDescription("Only <@678514481772494898> can use this command!");
    return message.channel.send({ embeds: [embed] });
  }


  try {
    command.execute(message, args, client, prefix);
  } catch (error) {
    console.log(error);
    embed.setDescription(
      "There was an error executing that command.\nI have contacted the owner of the bot to fix it immediately."
    );
    return message.channel.send({ embeds: [embed] });
  }
};

 
