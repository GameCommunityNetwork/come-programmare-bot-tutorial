require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', async () => {
    client.user.setActivity(`GCN tutorial`,{type: "PLAYING"})
})

client.on('ready',() => {
    console.log(`Mi sono loggato in questo account ${client.user.tag}`)
})

client.on("guildMemberAdd", member => {
    const welcomembed = new Discord.MessageEmbed()
      .setTitle("Benvenuto in tutorial")
      .setThumbnail(member.user.displayAvatarURL())
      .setColor(`RANDOM`)
      .setDescription(
        `
  Benvenuto ${member} su GameCommunityNetwork, grazie per averci scelto! Mi raccomando prima di fare qualsiasi cosa verificati su <#692027100693135460> e leggi le nostre linee guida su <#691739988395556904>, puoi assegnarti nuovi ruoli nel canale <#691739992329814107>. 
  
  > ora siamo in: undefinited
  > Invitato da: ?
  
  Lo staff ti augura una buona permanenza`
      )
      .setFooter(
        `TCI | Benvenuto nel server, tu sei il nostro futuro!`,
        `https://cdn.glitch.com/290413e0-6ece-48b4-aa3e-796c1c9c664b%2FPicsArt_03-24-09.24.49.jpg?v=1586000097063`
      );
     client.channels.cache.get("711969933315145851").send(`${member}`);
    client.channels.cache.get("711969933315145851").send(welcomembed);
  });
  client.on("guildMemberRemove", member => {
    const addioembed = new Discord.MessageEmbed()
      .setTitle("Arrivederci da TheCommunityItalian")
      .setColor(`RANDOM`)
      .setDescription(
        `
  Arrivederci da GameCommunityNetwork${member}, grazie per essere stato con noi!`
      )
      .setFooter(
        `Arrivederci da GameCommunityNetwork, buona continuazione su discord`,
        `https://cdn.glitch.com/290413e0-6ece-48b4-aa3e-796c1c9c664b%2FPicsArt_03-24-09.24.49.jpg?v=1586000097063`
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
      if(message.author.id !== owner.IDM) return; try {
  const prefix = "&"
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const annuncio = args.slice(1).join(" ")
  const annuncioembed = new Discord.MessageEmbed()
  
  .setTitle("Nuovo annuncio!")
  .setColor(`#007fff`)
  .setFooter(`TCI | Annuncio fatto da ${message.author.username}`,`https://cdn.glitch.com/290413e0-6ece-48b4-aa3e-796c1c9c664b%2FPicsArt_03-24-09.24.49.jpg?v=1586000097063`)
  .setDescription(annuncio) 
    client.channels.cache.get('711978363538899104').send(annuncioembed)
  } catch(err) {
    console.log(err)
  }}})
  client.on('message',message => {
    if (message.content.startsWith('&annuncio')) {
         message.delete()
       const owner = require('./staff.json')
      if(message.author.id !== owner.IDK) return; try {
  const prefix = "&"
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const annuncio = args.slice(1).join(" ")
  const annuncioembed = new Discord.MessageEmbed()
  
  .setTitle("Nuovo annuncio!")
  .setColor(`#007fff`)
  .setFooter(`TCI | Annuncio fatto da ${message.author.username}`,`https://cdn.glitch.com/290413e0-6ece-48b4-aa3e-796c1c9c664b%2FPicsArt_03-24-09.24.49.jpg?v=1586000097063`)
  .setDescription(annuncio) 
    client.channels.cache.get('711978363538899104').send(annuncioembed)
  } catch(err) {
    console.log(err)
  }}})
  
client.on('message',message => {
    if (message.content.startsWith('&sondaggio')) {
        message.delete()
        const owner = require('./staff.json')
        if(message.author.id !== owner.IDM) return; try {
const prefix = "&"
const args = message.content.slice(prefix.length).trim().split(/ +/g)
const titolo = args[1]
const sondaggio = args.slice(2).join(" ")
const sondaggioembed = new Discord.MessageEmbed()
.setTitle(titolo)
.setColor(`BLUE`)
.setFooter(`sondaggio fatto da ${message.author.username}`)
.setDescription(sondaggio)
 client.channels.cache.get('711981282778677298').send(sondaggioembed).then(m => {m.react(`✅`).then(() => m.react(`❌`))})
        } catch(err) {
            console.log(err)
        }}})
client.login(process.env.BOT_TOKEN)