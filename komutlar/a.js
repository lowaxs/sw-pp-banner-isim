const Discord = require('discord.js');
const moment = require('moment');


exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed()
.setColor("#ff0000")
.setDescription("Bu komutu kullanmak için gerekli yetkin yok! gereken yetki: `SUNUCUYU YÖNET`")
)
let argümanlar = ['pp','banner','isim'];
if(!args[0]) return message.channel.send('Bir argüman belirtmelisin: '+argümanlar.join(', '))
if(!argümanlar.includes(args[0].toLowerCase())) return message.channel.send('Geçersiz argüman girdin.\nBu komut için geçerli argümanlar: '+argümanlar.join(', '))

if(args[0].toLowerCase() === 'pp') {

  let isim = args.slice(1).join("+")
  if(!isim)return message.channel.send("link at canım")
  if(!args[1].startsWith('https://')) return message.channel.send(`\`${args[1]}\`, geçersiz bir link.\n**HTTPS** ile başlamasına özen göster.`)
message.guild.setIcon(isim)
let link = isim
  const embed = new Discord.MessageEmbed()
  .setColor("#fffa00")
  .setImage(link)
    

  message.channel.send(embed)


}
  if(args[0].toLowerCase() === 'banner') {
  let isim = args.slice(1).join("+")
  if(!isim)return message.channel.send("link at canım")
  if(!args[1].startsWith('https://')) return message.channel.send(`\`${args[1]}\`, geçersiz bir link.\n**HTTPS** ile başlamasına özen göster.`)
message.guild.setBanner(isim)
let link = isim
  const embed = new Discord.MessageEmbed()
  .setColor("#fffa00")
  .setImage(link)
    

  message.channel.send(embed)
}
  if(args[0].toLowerCase() === 'isim') {
      let isim = args.slice(1).join(" ")
  if(!isim)return message.channel.send("link at canım")
message.guild.setName(isim)
let link = isim
  const embed = new Discord.MessageEmbed()
  .setColor("#fffa00")
  .setDescription("Sunucunun Adı "+isim+" ile Değişti")
    message.channel.send(embed)

  }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'link'
};
