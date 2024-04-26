const axios = require('axios');

const Prefixes = [
  '/ai',
  'gear',
  'préscilia ',
  '+ai',
  'shinmon',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) { 
        await message.reply("🌹𝐋𝐮𝐤𝐚 𝐛𝐨𝐭🌹 \n____________________\n ✰ 𝐲𝐨 𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 🌹 𝐋𝐮𝐤𝐚 𝐛𝐨𝐭 🌹 𝐩𝐨𝐬𝐞 𝐦𝐨𝐢 𝐭'𝐚 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 𝐞𝐭 𝐥𝐚 𝐫𝐞𝐩𝐨𝐧𝐬𝐞 𝐭𝐞 𝐬𝐞𝐫𝐚 ✰  ");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `🌹𝐋𝐮𝐤𝐚 𝐛𝐨𝐭🌹
_______________________
${answer}
✰ 𝐋𝐮𝐤𝐚 𝐛𝐨𝐭 ✰`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
