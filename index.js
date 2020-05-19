require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', async () => {
    client.user.setActivity(`creato da GCN program`,{type: "PLAYING"})
})

client.on('ready',() => {
    console.log(`Mi sono loggato in questo account ${client.user.tag}`)
})

client.on("guildMemberAdd", member => {
    const welcomembed = new Discord.MessageEmbed()
      .setTitle("Benvenuto")
      .setThumbnail(member.user.displayAvatarURL())
      .setColor(`RANDOM`)
      .setDescription(
        `Benvenuto ${member}`
      )
      .setFooter(
        `Creato da GCN program`, `https://cdn.glitch.com/290413e0-6ece-48b4-aa3e-796c1c9c664b%2Fgcn.png?v=1589878082455`
      );
     client.channels.cache.get("L'ID della chat").send(`${member}`);
    client.channels.cache.get("L'ID della chat").send(welcomembed);
  });
  client.on("guildMemberRemove", member => {
    const addioembed = new Discord.MessageEmbed()
      .setTitle("Arrivederci")
      .setColor(`RANDOM`)
      .setDescription(
        `
  Arrivederci ${member}`
      )
      .setFooter(
        `Creato da GCN program`,
        `https://cdn.glitch.com/290413e0-6ece-48b4-aa3e-796c1c9c664b%2Fgcn.png?v=1589878082455`
      )
      .setThumbnail(member.user.displayAvatarURL());
    client.channels.cache.get("711969933315145851").send(addioembed);
  });
  client.on('message', message => {
    if (message.content === '&ping') {
  const apiPing = Math.round(message.client.ping);
  const responseTime = Math.round(Date.now() - message.createdTimestamp);
    message.channel.send(`Pong 🏓\nIl tempo di risposta è: ${responseTime} ms`)
    }
  })
  client.on('message',message => {
    if (message.content.startsWith('&annuncio')) {
         message.delete()
       const owner = require('./staff.json')
      if(message.author.id !== owner.IDX) return; try {
  const prefix = "&"
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const annuncio = args.slice(1).join(" ")
  const annuncioembed = new Discord.MessageEmbed()
  
  .setTitle("Nuovo annuncio!")
  .setColor(`#007fff`)
  .setFooter(`Creato da GCN program`,`https://cdn.glitch.com/290413e0-6ece-48b4-aa3e-796c1c9c664b%2Fgcn.png?v=1589878082455`)
  .setDescription(annuncio) 
    client.channels.cache.get('Chat id').send(annuncioembed)
  } catch(err) {
    console.log(err)
  }}})

client.on('message',message => {
    if (message.content.startsWith('&sondaggio')) {
        message.delete()
        const owner = require('./staff.json')
        if(message.author.id !== owner.IDX) return; try {
const prefix = "&"
const args = message.content.slice(prefix.length).trim().split(/ +/g)
const titolo = args[1]
const sondaggio = args.slice(2).join(" ")
const sondaggioembed = new Discord.MessageEmbed()
.setTitle(titolo)
.setColor(`BLUE`)
.setFooter(`Creato da GCN program`,`https://cdn.glitch.com/290413e0-6ece-48b4-aa3e-796c1c9c664b%2Fgcn.png?v=1589878082455`)
.setDescription(sondaggio)
 client.channels.cache.get('Chat id').send(sondaggioembed).then(m => {m.react(`✅`).then(() => m.react(`❌`))})
        } catch(err) {
            console.log(err)
        }}})
client.login(process.env.BOT_TOKEN)
