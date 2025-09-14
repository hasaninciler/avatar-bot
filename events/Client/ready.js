const { prefix } = require("../../config.json");

module.exports = async (client) => {

    client.logger.log(`${client.user.username} online!`, "ready");
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, "ready");

    //Game activity
    let statuses = [`${prefix}invite`, `${prefix}help`];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
  		client.user.setActivity(status, {type: "PLAYING"}); //metiuw
  	}, 10000)

}


 