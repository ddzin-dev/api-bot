module.exports = async client => {
  console.log(`Servers [${client.guilds.cache.size}] Users [${client.users.cache.size}]`);


  client.user.setActivity('Cachorrão do ddzin :)', {type: 'PLAYING'});
  console.log('online');
  
var requestOptions = {
  method: 'GET/POST',
  headers: {
    "authorization": "AUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({"server_count": 1500}); 
};

fetch(URL, requestOptions)
  .then(response => response.text())
  .then(console.log)
  .catch(console.error);

}

/* NÃO UTILIZE ESTE MODELO AINDA! */
