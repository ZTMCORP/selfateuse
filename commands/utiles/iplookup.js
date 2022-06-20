const superagent = require('superagent');

module.exports = {
  name: "iplookup",
  aliases: ['ipl'],
  usage: "<ipv4 address>",
  description: "Renvoies les informations d'une adresse IP V4.",
  run: async(message, args, command, client) => {

    message.delete();

    async function deleteMessage(me){
      setTimeout(() => {
        me.delete();
      }, 20000)
    }


    var ip = args[0];
    if(!ip) return await message.channel.send("Merci de renseigner une IP à scanner.").then(m => deleteMessage(m));

    async function lookup(add){

      const address = await superagent.get(`http://ip-api.com/json/${add}`);

      
      message.channel.send("Recherche en cours . . .").then(async m => {
        await m.edit(`        __IP Lookup__ \n **Adresse IP** = ||${address.body.query}||\n**Statut** = ||${address.body.status}||\n
        **Pays** = ||${address.body.country}||\n**Code du Pays** = ||${address.body.countryCode}||\n**Nom de la région** = ||${address.body.regionName}||\n**Region** = ||${address.body.region}||
        **Ville** = ||${address.body.city}||\n**Code Postal** = ||${address.body.zip}||\n**Latitude / Longitude** = ||${address.body.lat} / ${address.body.lon}||\n 
        **Fournisseur** = ||${address.body.isp}||`)
    });
    await message.channel.send("https://imgur.com/2BduqX2 , **__Selfateuse__**")
    
}
lookup(ip)
  }
}