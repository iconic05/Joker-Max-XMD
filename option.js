//*    THIS OPTION READ BEFORE ANYTHING.  *//

//* DON'T CHANGE BOT NAME
//* CHANGE NUMBER ON SYSTEM/JSON/OWNER.JSON
//*                    DEVELOPED BY ICONIC TECH
//*
//*
//*              NEWEST VERSION 

const fs = require('fs')
const chalk = require('chalk')


//* CUSTOM PREFIX
global.prefa = ['','!','.','#','&']
//* FALSE=DISABLE AND TRUE=ENABLE
global.chataudio = false; //* Enable audio replies
global.chatbot = false; //* Enable text chatbot
global.autoRecording = true//* auto recording
global.autoTyping = true //* auto typing
global.emojiReact = false; //*  Default: enabled
global.autorecordtype = true //* auto typing + recording
global.autoread = true //* auto read messages
global.autobio = true //* auto update bio
global.anti91 = false //* auto block +91 
global.autoswview = true //* auto view status/story
global.typemenu = 'v2'

//* contact details
global.ownernomer = "263716304574"
global.ownername = "iconic tech"
global.codewave = 'codewave-unit.zone.id'
global.ytname = "YT: https://www.youtube.com/@iconic-tech"
global.socialm = "GitHub: https://github.com/iconic05"
global.location = "zimbabwe/bulawayo"

global.ownernumber = '263716304574'  //* creator number
global.ownername = 'ɪᴄᴏɴɪᴄ-ᴛᴇᴄʜ' //* owner name
global.botname = 'ﾌㄖҜ乇尺 爪卂乂'//* CHANGE THIS BOT NOT WORK

//* STICKER DETAILS
global.packname = 'sᴛɪᴄᴋᴇʀ ᴍᴀᴅᴇ ʙʏ'
global.author = 'ɪᴄᴏɴɪᴄ-ᴛᴇᴄʜ'

//* OFFICIAL CHANNEL FOR ICONIC TECH
global.link = 'https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r'
//* REPLY MESSAGES : DO NOT CHANGE !!
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}
//* JOKER MAX XMD SYSTEM !
global.thumb = fs.readFileSync('./JokerMedia/JOKER-image.jpg')
//*.  STOP RECODED THIs BOT WILL FUCKING CRUSH 
//*   ONLY CREATER FIX THE BUG
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

//*.                   MADE  BY ICONIC TECH SUPPORT
