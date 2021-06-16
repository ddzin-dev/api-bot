module.exports = async client => {
  console.log(`Servers [${client.guilds.cache.size}] Users [${client.users.cache.size}]`);


  client.user.setActivity('Cachorrão do ddzin :)', {type: 'PLAYING'});
  console.log('online');

}
