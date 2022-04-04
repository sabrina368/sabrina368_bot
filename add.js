const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `799659146877730829`,
  content: `hey <@${context.params.event.user.id}>! welcome to my server uwu`,
  tts: false,
  embeds: [
    {
      type: 'rich',
      title: `rules: `,
      description: '',
      color: 0x00ffff,
      fields: [
        {
          name: `rule 1:`,
          value: `First of all, your account must follow Discord's ToS: https://discord.com/terms.`,
        },
        {
          name: `rule 2:`,
          value: ` Be nice and respectful to everyone, that's the least we expect from you without telling.`,
        },
        {
          name: `rule 3:`,
          value: `Any content that may harm a member or this server in any way is prohibited.`,
        },
      ],
    },
  ],
});
