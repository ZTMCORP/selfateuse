module.exports = {
    name: "help",
    aliases : ['h'],
    usage: "préfix + help",
    description: "Donnes les différentes commandes de selfateuse",
    run: async (message, args, command, client) => {
  
      message.delete();

      message.channel.send("``` Listes des commandes de Selfateuse : \n\n        help         =>      Cites les différentes commandes du selfbot\n\n        ping         =>      Donnes votre ping (latence)\n\n        delall       =>      Supprime tout les channels du serveur (permissions requises)\n\n        iplookup     =>      Effectue une recherche sur une adresse IP et renvoie les informations importantes sur cette IP\n\n        renew        =>      Supprime et recrée le channel actuel\n\n        spam         =>      Envoie un message que vous aurez définies dans 1 ou tout les channels pendant 1minutes !\n\n        credits      =>      Donnes les crédits du selfbot !```")
    }
}