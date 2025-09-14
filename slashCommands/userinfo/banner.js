const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const axios = require('axios')

module.exports = {
    name: 'banner',
    usage: "/banner (member)",
    description: 'Gets a users banner',
    options: [{
        name: "member",
        description: "Mention a member",
        type: "USER",
        required: false,
    }],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, options) => {
        const target = interaction.options.getMember("member") || interaction.member;
        await target.user.fetch();
        
            if(target.user.bannerURL()) {

                const response = new MessageEmbed()
                .setColor(target.user.accentColor || "RANDOM")
                .setTitle(target.user.tag)
                .setImage(target.user.bannerURL({dynamic: true, size: 512}) || "")
                    
                interaction.reply({embeds: [response]})
            } else {
                interaction.reply("Banner not found")
            }
    }
} 