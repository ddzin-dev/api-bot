module.exports = async (client, member) => {

let canal = member.guild.channels.cache.find(canal => canal.name === "geral");
canal.send(`${member} entrou.`)
}
