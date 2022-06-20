module.exports = {
    name: "ping",
    aliases: ['p'],
    description: "Montre ton ping (latence)",
    run: async (message, args, command, client) => {

      message.delete();

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 5000)
      }

      await message.channel.send("Chargement . . .").then(async m => {
          await m.edit(`Pong! voici ton ping !  \`${m.createdTimestamp - message.createdTimestamp}ms\``).then(me => deleteMessage(me));
          message.channel.send("https://imgur.com/cgXGwpa").then(me => deleteMessage(me));
      });

    }
}