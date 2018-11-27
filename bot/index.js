const secretToken = require('../secret.json');

const Discord = require('discord.js');
const client = new Discord.Client();

let discord_token = secretToken['discord-token'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'picklerick');
    let memberavatar = member.user.avatarURL;
    let enbed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle('**Bir kişi daha fazlayız**')
    .setThumbnail(memberavatar)
    .setDescription(`${member}` + ', Aramıza katıldı.')
    .addField('ID', "**[" + `${member.id}` + "]**", true)
    .setFooter('**' + `${member.guild.name}` + '**')
    .setTimestamp()
    

    channel.sendEmbed(enbed); 
})

client.on('guildMemberRemove', member => {
    console.log('birisi çıktı');
    let channel = member.guild.channels.find('name', 'picklerick');
    let memberavatar = member.user.avatarURL;
    let enbed = new Discord.RichEmbed()
    .setColor('RED')
    .setTitle('**Bir kişi daha eksiğiz**')
    .setThumbnail(memberavatar)
    .setDescription(`${member}` + ', Aramızdan ayrıldı.')
    .addField('ID', "**[" + `${member.id}` + "]**", true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp()

    channel.sendEmbed(enbed); 
    if (client.user.status === 'ofline') 
    console.log('duck u');
})

client.on('reconnecting', ( status ) => {
  console.log('içerdeyim')
  if (status === 'online')
    console.log(pipi);
  client.user.setStatus('online')
    .then(console.log)
    .catch(console.error);
})

client.on('guild', () => {
  this.client.emit(Constants.Events.DISCONNECT, event);
      this.debug(Constants.WSCodes[event.code]);
      this.destroy();
      return;
})

client.login(discord_token);

//console.log(`Hello from ${channel}`);
//console.log('Hello from ' + channel);