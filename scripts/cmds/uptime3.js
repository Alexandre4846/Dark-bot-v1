module.exports = {
  config: {
    name: "uptime3",
    aliases: ["up3", "upt3"],
    version: "1.0",
    author: "XyryllPanget",
    role: 0,
    shortDescription: {
      en: "Displays the uptime of the bot."
    },
    longDescription: {
      en: "Displays the amount of time that the bot has been running for."
    },
    category: "System",
    guide: {
      en: "Use {p}uptime to display the uptime of the bot."
    }
  },
  onStart: async function ({ api, event, args }) {
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours} hours ${minutes} minutes ${seconds} second`;
    api.sendMessage(`🧑‍🏫|𝙃𝙄 𝙈𝘼𝙎𝙏𝙀𝙍📑 \n✰✰✰✰✰✰✰✰✰✰\n, 🎀 𝐋𝐮𝐤𝐚 𝐛𝐨𝐭  𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐨𝐧𝐢𝐧𝐠 𝐟𝐨𝐫 \n✰✰✰✰✰✰✰✰✰✰\n [⏰${uptimeString}]\n\n______________________🧛𝘿𝙍𝘼𝘾𝙐𝙇𝘼🧛.`, event.threadID);
  }
};
