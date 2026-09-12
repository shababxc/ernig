const { Telegraf } = require('telegraf');

const BOT_TOKEN = '8831584904:AAHTeJSjCo8g_YJqrbTyWeZvisJvYBT-n58'; 
const MINI_APP_URL = 'https://ernig-pearl.vercel.app/'; 

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    return ctx.reply(
        "🚀 Welcome to Media Boost!\n\nGrow your social media instantly. Click below to open our App ⚡",
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { 
                            text: "📱 Open App", 
                            web_app: { url: MINI_APP_URL } 
                        }
                    ]
                ]
            }
        }
    );
});

module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            res.status(200).send('OK');
        } else {
            res.status(200).send('Media Boost Bot is Running on Vercel!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
};
