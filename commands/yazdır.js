const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "yazdır",
  description: "💙 Bota mesaj yazdırırsın.",
  type: 1,
  options: [
    {
        name:"mesaj",
        description:"Bota ne yazdırmak istersin?",
        type:3,
        required:true
    },
   
   
    
],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({content: "<:redcarpi:1128609008345952256> | Mesajları Yönet Yetkin Yok!", ephemeral: true})


    const text = interaction.options.getString('mesaj')
    interaction.reply({ content: `<:banlayan:1210899205275521084> | Başarılı bir şekilde yazdırıldı.`, ephemeral: true })
    interaction.channel.send({ content: `${text}` })


  }

};
