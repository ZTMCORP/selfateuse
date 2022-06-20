module.exports = {
    name: "credits",
    aliases: ['c'],
    description: "Donnes les crédits du selfbot",
    run: async (message, args, command, client) => {
        message.delete();

      async function deleteMessage(me){
          setTimeout(() => {
              me.delete();
          }, 15000)
      }
      message.channel.send("```         © Selfateuse - RTVTOOL \nDiscord :  https://discord.gg/WuEH2BWmTf\nInstagram : @totoquifaitdodo\nGithub : @ZTMCorp\nYoutube : https://www.youtube.com/channel/UC0xv0Y1OlATsiok6rlVjhDw```").then(me => deleteMessage(me));

    }
}