const config = require("../../config.json");

module.exports = {
    name: "renew",
    aliases: [],
    description: "Supprime et recrée le salon ou vous effectuez la commande !",
    run: async(message, args, command, client) => {

        message.delete();

        async function deleteMessage(me){
          setTimeout(() => {
            me.delete();
          }, 3000)
        }

        await message.channel.send("Est tu sur de vouloir renew ce channel ? Si oui, tapez **oui**").then(m => deleteMessage(m));

        const nukedChannel = message.channel;
        const info = nukedChannel.position;
        if(!nukedChannel.deletable) return message.channel.send("Ce channel ne peut etre renew . . .");

        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
          var answer = collected.first();
          answer.delete()

          if(answer.content.toLowerCase() === "oui" || answer.content.toLowerCase() === 'y'){

              nukedChannel.clone().then(c => c.setPosition(info));
              nukedChannel.delete();

          }
          else return answer.channel.send("Renew annulé !").then(m => deleteMessage(m));
        }).catch(() => {})

    }
}