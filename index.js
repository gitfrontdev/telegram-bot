const TelegramApi = require('node-telegram-bot-api');
const {botOptions} =require('./options');
const token = '1423864221:AAGC7hWBSq_o3CM8MW4lKzMXSPRUd3k2-h0';

const bot = new TelegramApi(token, {polling: true});

const start = () => {
  bot.setMyCommands([
    {command: '/start', description: 'Botni (qaytadan) ishga tushurish'},
    {command: '/help', description: 'Botdan foydalanish bo\'yicha qo\'llanma'}
  ])

  bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
      return bot.sendMessage(chatId, "Assalomu Alaykum. quyidagi tugmalardan birini tanlang.\n\nBotdan foydalanish qo\'llanmani ko\'rish uchun /help buyrug'ini tanlashingiz mumkin.", botOptions);
    }

    if (text === '/help') {
      return bot.sendMessage(chatId, "Bu bo\'limda botdan foydalanish bo\'yicha qo\'llanma bo\'ladi.")
    }
  })

  bot.on('callback_query', msg => {
    // const text = msg.text;
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === "murojaat") {
      bot.sendMessage(chatId, "Marhamat, murojaatingizni qoldiring. Biz uni albatta ko\'rib chiqamiz!");

      if (data !== "") {
        bot.sendMessage(chatId, "Rahmat, murojaatingiz ko\'rib chiqish uchun yuborildi. Sizga aloqaga chiqishimiz uchun, iltimos, telefon raqamingizni qoldiring:");
      }
    }

    if (data === 'tariflar') {
      bot.sendMessage(chatId, "Bizda siz uchun quyidagi tariflar mavjud:");
      bot.sendMessage(chatId, "\tStart tarifi: \n\nNarxi: 1'999'000 so\'m, \n\nTarifdagi xizmatlar:\n- Kontent reja ishlab chiqiladi, \n\n- Hafatada 3ta post chiqadi.");
      bot.sendMessage(chatId, "\tPro tarifi: \n\nNarxi: 3'999'000 so\'m, \n\nTarifdagi xizmatlar:\n- Kontent reja ishlab chiqiladi, \n-2 marta target qilinadi, \n- Hafatada 5ta post chiqadi.");
    }
  })
}

start();