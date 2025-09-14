const { Client, Collection, Intents, Message, Guild, MessageEmbed} = require("discord.js");
const { readdirSync } = require("fs");
const client = new Client({
   shards: "auto",
   intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES,  Intents.FLAGS.DIRECT_MESSAGES, ],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]

});
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.owner = client.config.ownerID;
client.prefix = client.config.prefix;
client.embedColor = client.config.embedColor;
client.aliases = new Collection();
client.commands = new Collection();
client.logger = require("./utils/logger.js");
require("./handler/Client")(client);

client.on('messageCreate', message => {
    if (message.channel.type == 'DM') {
        const embedss = new MessageEmbed()
        .setDescription(`${message.author.tag}, (${message.author.id}) Adlı kullanıcı botun DM'sine Şu mesajı yazdı:**${message.content}**`)
        .setAuthor(`${message.author.tag}`)
        .setImage(message.attachments.first() ? message.attachments.first().proxyURL : null)
        .setTimestamp()
        const dmlog = client.channels.cache.get("1044693604955852871")
        dmlog.send({embeds: [embedss]})
    }
})
client.login("");
