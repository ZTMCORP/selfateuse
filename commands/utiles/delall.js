const config = require("../../config.json");

module.exports = {
    name: "delall",
    aliases: ['delall'],
    description: "Supprime tout les channels (vocaux et textuel), nécessite la permission :)",
    run: async(message, args, command, client) => {

        message.delete();

        async function deleteMessage(me){
          setTimeout(() => {
            me.delete();
          }, 8000)
        }

        await message.channel.send("Etes vous sûr de vouloir supprimer tout les channels ? Si oui, tapez : **oui**").then(m => deleteMessage(m));

        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
          var answer = collected.first();
          answer.delete()

          if(answer.content.toLowerCase() === "oui" || answer.content.toLowerCase() === 'y'){

            message.guild.channels.cache.forEach(channel => {
              setTimeout(() => {channel.delete()}, 1000);
            });

          }
          else return answer.channel.send("Delall annulé !").then(m => deleteMessage(m));
        }).catch(() => {})

    }
}