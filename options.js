module.export = {
  botOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: 'Murojaat qoldirish', callback_data: "murojaat"}],
        [{text: 'Tariflar bilan tanishish', callback_data: "tariflar"}],
      ]
    })
  }
}