const { Client } = require("discord.js");const chalk = require("chalk");
const array = [];
const mongoose = require('mongoose');
const { readdirSync } = require("fs");

/**
 * @param {Client} client
 */
module.exports = async (client) => {

    

 
    client.on("disconnect", () => console.log("Bot is disconnecting..."))
    client.on("reconnecting", () => console.log("Bot reconnecting..."))
    client.on('warn', error => console.log(error));
    client.on('error', error => console.log(error));
    process.on('unhandledRejection', error => console.log(error));
    process.on('uncaughtException', error => console.log(error));
    

readdirSync("./events/Client/").forEach(file => {
    const event = require(`../events/Client/${file}`);
    let eventName = file.split(".")[0];
    client.logger.log(`Loading Events Client ${eventName}`, "event");
    client.on(eventName, event.bind(null, client));
});


/// slashCommands
   const data = [];
       
readdirSync("./slashCommands/").forEach((dir) => {
        const slashCommandFile = readdirSync(`./slashCommands/${dir}/`).filter((files) => files.endsWith(".js"));
    
        for (const file of slashCommandFile) {
            const slashCommand = require(`../slashCommands/${dir}/${file}`);

            if(!slashCommand.name) return console.error(`slashCommandNameError: ${slashCommand.split(".")[0]} application command name is required.`);

            if(!slashCommand.description) return console.error(`slashCommandDescriptionError: ${slashCommand.split(".")[0]} application command description is required.`);

            client.slashCommands.set(slashCommand.name, slashCommand);
            client.logger.log(`Client SlashCommands Command (/) Loaded: ${slashCommand.name}`, "cmd");
            data.push(slashCommand);
        }
    });

    client.on("ready", async () => {
          await client.application.commands.set(data).then(() => client.logger.log(`Client SlashCommand (/) Registered.`, "ready")).catch((e) => console.log(e));
    });
  

}
