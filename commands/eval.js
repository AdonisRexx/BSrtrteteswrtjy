const { ApplicationCommandType, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ApplicationCommandOptionType, PermissionsBitField} = require('discord.js');
const util = require('util');

module.exports = {
    name: 'eval',
    description: "Eval code.",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "code",
            description: "Code to eval",
            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],
    run: async (client, interaction) => {
    
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ content: `${client.messages.NO_PERMS}`, ephemeral: true });

    const code = interaction.options.getString("code");


    try {
        const result = await eval(code);
        let output = result;
        if(typeof result !== 'string') {
            output = util.inspect(result);
        }
        interaction.reply({ content: 'Success', ephemeral: true})
        console.log(output)
    } catch (error) {
        console.log(error)
    }
    

    }
};