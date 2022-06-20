const config = require("../../config.json");

module.exports = {
    name: "spam",
    aliases: ['sp'],
    description: "Spam le channel actuelle ou tout les channels pendant 1 minutes !",
    usage: "spam <actuel/tous>",
    run: async(message, args, command, client) => {

        message.delete();

        async function deleteMessage(me){
          setTimeout(() => {
            me.delete();
          }, 3000)
        }

        if(!args[0]) return message.channel.send("Merci de spécifiez quels channels vous voulez spam(`actuel / tous`).").then(m => deleteMessage(m));

        var spamming;

        await message.channel.send("Est-tu sur de vouloir spam? Si oui, tape : oui").then(m => deleteMessage(m));

        message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 10000}).then(collected => {
          var answer = collected.first();
          answer.delete()

          if(answer.content.toLowerCase() === "oui" || answer.content.toLowerCase() === 'y'){

              if(args[0] === 'actuel'){

                  function SpamFunc(){
                      message.channel.send("**Coucou c'est toto le plus beau**");
                  }
                  spamming = setInterval(SpamFunc, 2000);

                  setTimeout(() => {
                      clearInterval(spamming);
                  }, 10000);

              }

              else if(args[0] === 'tous'){

                  message.guild.channels.cache.forEach(chan => {

                      function SpamFunc(){
                          chan.send("**Coucou c'est toto le plus beau**");
                      }
                      spamming = setInterval(SpamFunc, 2000);

                      setTimeout(() => {
                          clearInterval(spamming);
                      }, 10000);

                  })

              }

          }
          else return answer.channel.send("Spam annulé").then(m => deleteMessage(m));
        }).catch(() => {})

    }
}