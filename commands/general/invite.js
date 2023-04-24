const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite_r6')
		.setDescription('Invites users with the specified roles.')
        .addRoleOption(option => 
            option.setName('role')
            .setDescription('Select a role to invite')
            .setRequired(true)
        ),
	async execute(interaction) {
		const role = interaction.options.getRole('role');

		const roleMembers = role.members;
		for (const member of roleMembers.values()) {
			try {
				await member.send(`Hey ${member.displayName}, you have been invited to play Rainbow Six Siege!`);
			} catch (error) {
				console.error(`Could not send message to ${member.displayName}:`, error);
			}
		}

		await interaction.reply(`Invites sent to members with the role: ${role.name}`);
	},
};
