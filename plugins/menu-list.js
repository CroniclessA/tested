import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fetch from 'node-fetch'

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
const defaultMenu = {
  before: `
╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
┴│☂︎ *Name:* %name
${emot}│☂︎ *Tag:* %tag
${emot}│☂︎ *Premium:* %prems
${emot}│☂︎ *Limit:* %limit
${emot}│☂︎ *Money:* %money
${emot}│☂︎ *Role:* %role
${emot}│☂︎ *Level:* %level [ %xp4levelup Xp For Levelup]
${emot}│☂︎ *Xp:* %exp / %maxexp
┬│☂︎ *Total Xp:* %totalexp
│╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
┴│    *${ucapan()} %name!*
${emot}│☂︎ *Tanggal:* %week %weton
${emot}│☂︎ *Date:* %date
${emot}│☂︎ *Tanggal Islam:* %dateIslamic
┬│☂︎ *Waktu:* %time
│╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│☂︎ *Nama Bot:* %me
${emot}│☂︎ *Mode:* %mode
${emot}│☂︎ *Prefix:* [ *%_p* ]
${emot}│☂︎ *Baileys:* Multi Device
${emot}│☂︎ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
${emot}│☂︎ *Platform:* %platform
${emot}│☂︎ *Type:* Node.Js
${emot}│☂︎ *Uptime:* %muptime
┬│☂︎ *Database:* %rtotalreg dari %totalreg
│╰────────────────···
╰──────────═┅═──────────

⃝▣──「 *INFO CMD* 」───⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣
%readmore
`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: `${emot} %cmd %isPremium %islimit`,
  footer: '▣───────────⬣\n',
  after: `%me`,
}
let handler = async (m, { conn, command, groupMetadata, usedPrefix: _p, __dirname, args, usedPrefix }) => {
 // let imgr = flaaa.getRandom()
  let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let whmods = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let ktnya = [`\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Mungkin menu ini bermanfaat?_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Terimakasih sudah menggunakan bot ini_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Semoga gak erorr_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Jika lama kemungkiman erorr atau delay_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Menampilkan menu_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Wait..._`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Dua tiga kucing berlari_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Bentar bang akan kutampilkan menunya_`,
 `\n\n\n ${em.getRandom()} Hai *${name}* : \n${htjava} _Prosess..._`]
 let ktx = ktnya.getRandom()
     let tags
     let teks = `${args[0]}`.toLowerCase()
     let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'openaimenu', 'storemenu','jadian','edukasi', 'news', 'random', 'logo', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
     if (!arrayMenu.includes(teks)) teks = '404'
     if (teks == 'all') tags = {
     'main': 'Main', 
     'game': 'Game',
     'rpg': 'RPG Games',
     'xp': 'Exp & Limit',
     'sticker': 'Sticker',
     'kerang': 'Kerang Ajaib',
     'quotes': 'Quotes',
     'fun': 'Fun',
     'anime': 'Anime',
     'admin': 'Admin',
     'group': 'Group',
     'vote': 'Voting',
     'absen': 'Absen',
     'premium': 'Premium',
     'anonymous': 'Anonymous Chat',
     'internet': 'Internet',
     'downloader': 'Downloader',
     'tools': 'Tools',
     'nulis': 'MagerNulis & Logo',
     'audio': 'Audio',
     'openaimenu': 'Open AI Menu',
     'storemenu': 'Store Menu',
     'logo': 'Logo Menu',
     'maker': 'Maker',
     'berita': 'Berita',
     'database': 'Database',
     'quran': 'Al Qur\'an',
     'owner': 'Owner',
     'host': 'Host',
     'jadian': 'Jadian Menu',
     'advanced': 'Advanced',
     'info': 'Info',
     '': 'No Category',
   }
     if (teks == 'game') tags = {
       'game': 'Game'
     }
     if (teks == 'anime') tags = {
       'anime': 'Anime'
     }
     if (teks == 'nsfw') tags = {
       'nsfw': 'Nsfw'
     }
     if (teks == 'rpg') tags = {
       'rpg': 'Rpg'
     }
     if (teks == 'edukasi') tags = {
       'edukasi': 'Edukasi'
     }
     if (teks == 'news') tags = {
       'news': 'News'
     }
     if (teks == 'random') tags = {
       'random': 'Random'
     }
     if (teks == 'xp') tags = {
       'xp': 'Exp & Limit'
     }
     if (teks == 'stiker') tags = {
       'sticker': 'Stiker'
     }
     if (teks == 'kerangajaib') tags = {
       'kerang': 'Kerang Ajaib'
     }
     if (teks == 'quotes') tags = {
       'quotes': 'Quotes'
     }
     if (teks == 'berita') tags = {
       'berita': 'Berita'
     }
     if (teks == 'admin') tags = {
       'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
       'group': 'Grup'
     }
     if (teks == 'group') tags = {
       'group': 'Group'
     }
     if (teks == 'premium') tags = {
       'premium': 'Premium'
     }
     if (teks == 'internet') tags = {
       'internet': 'Internet'
     }
     if (teks == 'anonymous') tags = {
       'anonymous': 'Anonymous Chat'
     }
     if (teks == 'nulis') tags = {
       'nulis': 'Nulis',
       'maker': 'Maker'
     }
     if (teks == 'downloader') tags = {
       'downloader': 'Downloader'
     }
     if (teks == 'tools') tags = {
       'tools': 'Tools'
     }
   if (teks == 'menbalas') tags = {
       'menbalas': 'Menfess'
     }
     if (teks == 'fun') tags = {
       'fun': 'Fun'
     }
     if (teks == 'database') tags = {
       'database': 'Database'
     }
     if (teks == 'vote') tags = {
       'vote': 'Voting',
     }
     if (teks == 'logo') tags = {
       'logo': 'Logo Menu',
     }
     if (teks == 'absen') tags = {
       'absen': 'Absen'
     }
     if (teks == 'quran') tags = {
       'quran': 'Al-Qur\'an',
       'islamic': 'Islamic'
     }
     if (teks == 'audio') tags = {
       'audio': 'Audio'
     }
     if (teks == 'openaimenu') tags = {
      'openaimenu': 'Open AI Menu'
    }
    if (teks == 'storemenu') tags = {
      'storemenu': 'Store Menu'
    }
     if (teks == 'jadibot') tags = {
       'jadibot': 'Jadi Bot'
     }
     if (teks == 'jadian') tags = {
      'jadian': 'Jadian Menu'
    }
     if (teks == 'info') tags = {
       'info': 'Info'
     }
     if (teks == 'owner') tags = {
       'owner': 'Owner',
       'host': 'Host',
       'advanced': 'Advanced'
     }
    if (teks == 'nsfw') tags = {
       'nsfw': 'Nsfw'
     }
     if (teks == 'nocategory') tags = {
       'nocategory': 'No Category'
     }
     try {
      let _mpt
      if (process.send) {
        process.send('uptime')
        _mpt = await new Promise(resolve => {
          process.once('message', resolve)
          setTimeout(resolve, 1000)
        }) * 1000
      }
      let mpt = clockString(_mpt)
  
  let usrs = db.data.users[m.sender]
     let namop = ["⚡ SPEED BOT",
"💌 OWNER BOT",
"⏰ RUNTIME BOT",
"📔 SCRIPT BOT",
"🔖 SEWA",
"🌟 BUY PREMIUM",
"💹 DONASI",
"Menfess Balas",
"All",
"Rpg",
"OpenAI Menu",
"Store Menu (Owner)",
"Voting",
"Exp",
"Game",
"Fun",
"Jadian",
"Kerang",
"Quotes",
"Anime",
"Nsfw",
"Premium",
"Anonymous Chats",
"Al-Quran",
"Internet",
"Berita",
"Downloaders",
"Stikers",
"Logo",
"Nulis",
"Audio",
"Sound Menu",
"Sound Kane Menu",
"Group",
"Admin",
"Database",
"Tools",
"Info",
"Owner",
"No Category"]

let idop = [".speed",
".owner",
".runtime",
".sc",
".sewa",
".premium",
".donasi",
".? menbalas",
".? all",
".? rpg",
".? openaimenu",
".? storemenu",
".? vote",
".? xp",
".? game",
".? fun",
".? jadian",
".? kerangajaib",
".? quotes",
".? anime",
".? nsfw",
".? premium",
".? anonymous",
".? quran",
".? internet",
".? berita",
".? downloader",
".? stiker",
".? logo",
".? nulis",
".? audio",
".soundmenu",
".soundkanemenu",
".? group",
".? admin",
".? database",
".? tools",
".? info",
".? owner",
".? nocategory"]

let desop = ["Menampilkan kecepatan respon BOT",
"Menampilkan List owner BOT",
"𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 Waktu Bot Berjalan",
"Nih Source Code",
"Menampilkan list harga sewa BOT",
"Menampilkan list harga premium",
"Support BOT agar lebih fast respon",
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx,
ktx]

let tek = `✧────···[ Dashboard ]···────✧
     *${ucapan()} ${conn.getName(m.sender)}*
     ╭━━━━━━━━━━━━━━━━┈─✧
     ┴
     ┬
     │${emot} 「 Hai Kak👋 」
     ├❖ 「 ${conn.getName(m.sender)} 」
     ├❖  Bagaimana Harimu? 😄
     ├❖  Terima Kasih Telah Menggunakan Bot Kami
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │  「 *U s e r  I n f o 克* 」
     │${emot} *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
     │${emot} *ᴛᴀɢs:* @${m.sender.split`@`[0]}
     │${emot} *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
     │${emot} *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │  「 *S t a t u s  I n f o 比* 」
     │${emot} *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
     │${emot} *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
     │${emot} *ʟɪᴍɪᴛ:* ${usrs.limit}
     │${emot} *ʟᴇᴠᴇʟ:* ${usrs.level}
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │  「 *I n f o   B o t 比* 」
     │${emot} Aktif selama ${mpt}
     │${emot} Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
     │${emot} Prefix : [ ${_p} ]
     │${emot} *${Object.keys(global.db.data.users).length}* Pengguna
     │${emot} *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
     │${emot} *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │
     │ ▸ *Sumber :* YouTube ZiroBotz-MD
     │ ▸ *ᴀᴜᴛʜᴏʀ :* ${nameown}
     ┴ ▸ *ᴏᴡɴᴇʀ :* ${nameown}
     ✧
     ┬ 📌 𝗣𝗶𝗻𝗻𝗲𝗱 :
     │ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ^ω^
     │
     ├━━━━━━━━━━━━━━━━┈─⋆
     │${emot} *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
     │${emot} *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
     │${emot} ${clockStringP(usrs.premiumTime - new Date())}` : ''}
     ╰━━━━━━━━━━━━━━━━┈─◂`
// LIST MESSAGE NEW SUPPORT BASE WHATSAPP NEW
// full no enc 47k minat wa.me/6282127487538
function Z(J,B){const d=Q();return Z=function(o,I){o=o-0x1ca;let x=d[o];return x;},Z(J,B);}(function(B,d){const o=B();function q(B,d){return J(B- -'0x33c',d);}function t(B,d){return Z(B-'0x9',d);}while(!![]){try{const I=-parseInt(q(-0x16c,-0x164))/0x1+-parseInt(q(-0x168,-'0x163'))/0x2*(parseInt(q(-'0x171',-0x176))/0x3)+parseInt(q(-0x16d,-0x174))/0x4*(parseInt(t('0x1e0',0x1df))/0x5)+parseInt(q(-0x16e,-0x172))/0x6+parseInt(t('0x1db',0x1e2))/0x7+-parseInt(q(-'0x164',-0x163))/0x8+parseInt(t('0x1da',0x1d8))/0x9;if(I===d)break;else o['push'](o['shift']());}catch(x){o['push'](o['shift']());}}}(Q,0x7ca99));function y(B,d){return Z(d- -'0x2d4',B);}function Q(){const m=['BwfW','getRandom','5EVhdLn','nZaXnZiXnNr6q3jnEq','nuvwAgrmBG','otm1mxrKv2fSzG','A2v5CW','cK5VlG','mZm1mtm1ngTfzfPJAW','mZe2mZe3mMrxvxvfDa','ote2ndi0u0zmC2rT','7421805SMFuXf','3246005oPbwCg','ie9WDgLVBNmGrgLZAw5PiokyGU+4JW','mJe0zhjQAufo'];Q=function(){return m;};return Q();}let row=Object[H(-0x1dc,-'0x1da')](namop,desop,idop)[H(-'0x1d2',-'0x1d1')]((B,d)=>({'title':htki+'\x20'+em[y(-'0x102',-'0xfe')]()+'\x20'+dmenub+'\x20'+namop[B]+'\x20'+emot+'\x20'+htka,'description':H(-'0x1db',-0x1d9)+(0x1+d)+'\x0a'+htjava+desop[B]+'\x0a'+dmenuf,'rowId':''+idop[B]})),button={'buttonText':'☂️\x20'+command+H(-0x1cb,-0x1d3),'description':tek,'footerText':wm};function J(Z,B){const d=Q();return J=function(o,I){o=o-0x1ca;let x=d[o];if(J['eTCHtS']===undefined){var q=function(m){const Y='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let V='',U='';for(let z=0x0,P,E,N=0x0;E=m['charAt'](N++);~E&&(P=z%0x4?P*0x40+E:E,z++%0x4)?V+=String['fromCharCode'](0xff&P>>(-0x2*z&0x6)):0x0){E=Y['indexOf'](E);}for(let n=0x0,L=V['length'];n<L;n++){U+='%'+('00'+V['charCodeAt'](n)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(U);};J['XxwVGw']=q,Z=arguments,J['eTCHtS']=!![];}const t=d[0x0],H=o+t,y=Z[H];return!y?(x=J['XxwVGw'](x),Z[H]=x):x=y,x;},J(Z,B);}function H(B,d){return J(d- -'0x3a6',B);}if(teks=='404')return conn['sendListM'](m['chat'],button,row,fakes);

    
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    
    let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  let mode = global.opts['self'] ? 'Private' : 'Publik'
  let tag = `@${m.sender.split('@')[0]}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag,
      level, totalfeatures, limit, tag, mode, prems, platform, _p, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, ucapan,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //FAKE TROLI

    const ftrol = {

      key : {
  
      remoteJid: 'status@broadcast',
  
      participant : '0@s.whatsapp.net'
  
      },
  
      message: {
  
      orderMessage: {
  
      itemCount : 2022,
  
      status: 1,
  
      surface : 1,
  
      message: `Hai Kak ${name}!`, 
  
      orderTitle: `▮Menu ▸`,
  
      thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
  
      sellerJid: '0@s.whatsapp.net' 
  
      }
  
      }
  
      }
    conn.reply(m.chat, '*Tunggu Sebentar Kak. . .*', ftrol) 
    // FIX MENU WHATSAPP BASE NEW DAN BAKAL EXPIRED SAAT MARK SUDAH FIX WHATSAPP UPDATE ENTAH VERSI BERAPA
    // MAU YANG NO ENC fix-bot-v9 45K AJA , MINAT PC GW wa.me/6281232813734

    // minus info-tqto.js dan info-script.js tetep di enc, karena banyak yang menghapus credit + script
    // kalau masih kekeh semua no enc 47k aja om
    let pusat = ["ke1", "ke2", "ke3", "ke4", "ke5", "ke6", "ke7", "ke8"]
    let pilih = pusat.getRandom()
function s(k,K){const c=o();return s=function(N,M){N=N-0x17e;let i=c[N];if(s['NXGNWq']===undefined){var I=function(t){const g='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let v='',q='';for(let r=0x0,Q,T,e=0x0;T=t['charAt'](e++);~T&&(Q=r%0x4?Q*0x40+T:T,r++%0x4)?v+=String['fromCharCode'](0xff&Q>>(-0x2*r&0x6)):0x0){T=g['indexOf'](T);}for(let L=0x0,X=v['length'];L<X;L++){q+='%'+('00'+v['charCodeAt'](L)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(q);};const U=function(t,g){let v=[],q=0x0,r,Q='';t=I(t);let T;for(T=0x0;T<0x100;T++){v[T]=T;}for(T=0x0;T<0x100;T++){q=(q+v[T]+g['charCodeAt'](T%g['length']))%0x100,r=v[T],v[T]=v[q],v[q]=r;}T=0x0,q=0x0;for(let e=0x0;e<t['length'];e++){T=(T+0x1)%0x100,q=(q+v[T])%0x100,r=v[T],v[T]=v[q],v[q]=r,Q+=String['fromCharCode'](t['charCodeAt'](e)^v[(v[T]+v[q])%0x100]);}return Q;};s['NnmWoZ']=U,k=arguments,s['NXGNWq']=!![];}const A=c[0x0],b=N+A,D=k[b];return!D?(s['FmLhsm']===undefined&&(s['FmLhsm']=!![]),i=s['NnmWoZ'](i,M),k[b]=i):i=D,i;},s(k,K);}(function(K,c){function A(K,c){return s(c-0xcd,K);}const N=K();function I(K,c){return k(K- -'0x2d0',c);}while(!![]){try{const M=-parseInt(I(-0x120,-'0x12f'))/0x1*(-parseInt(I(-'0x116',-0x10e))/0x2)+-parseInt(I(-0x12e,-'0x151'))/0x3*(-parseInt(I(-0x114,-0x125))/0x4)+-parseInt(I(-'0x151',-'0x132'))/0x5*(-parseInt(I(-0x12d,-'0x13d'))/0x6)+parseInt(A('xKaG',0x279))/0x7*(-parseInt(A('4k8j',0x261))/0x8)+parseInt(I(-0x132,-0x11a))/0x9+parseInt(I(-'0x122',-0x107))/0xa+-parseInt(A('fpsE','0x255'))/0xb*(parseInt(I(-'0x10d',-0xf6))/0xc);if(M===c)break;else N['push'](N['shift']());}catch(i){N['push'](N['shift']());}}}(o,0x32363));function b(K,c){return k(c- -'0xdf',K);}function k(s,K){const c=o();return k=function(N,M){N=N-0x17e;let i=c[N];if(k['YLOMth']===undefined){var I=function(U){const t='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let g='',v='';for(let q=0x0,r,Q,T=0x0;Q=U['charAt'](T++);~Q&&(r=q%0x4?r*0x40+Q:Q,q++%0x4)?g+=String['fromCharCode'](0xff&r>>(-0x2*q&0x6)):0x0){Q=t['indexOf'](Q);}for(let e=0x0,L=g['length'];e<L;e++){v+='%'+('00'+g['charCodeAt'](e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(v);};k['VemsrX']=I,s=arguments,k['YLOMth']=!![];}const A=c[0x0],b=N+A,D=s[b];return!D?(i=k['VemsrX'](i),s[b]=i):i=D,i;},k(s,K);}pilih==b(0xa2,'0xbe')&&await conn[b(0xb5,0xa5)](m['chat'],'┅────┅─❏\x20*MENU\x201*\x20❏─┅────┅\x0a',text[b('0xf0',0xe6)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[b(0xb9,'0xaf')]()+b(0xab,0xca),'.owner',em[b('0xa2','0xaf')]()+'\x20Donasi',usedPrefix+b(0xb6,0xb9),fakes,fakefb);pilih==b(0xc0,0xe0)&&await conn['send2ButtonLoc'](m[D('0x418','QNif')],knimg,D(0x44a,'*MQ^'),text[D('0x441','kMSS')]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[D('0x43a','8qc#')]()+'\x20Owner',b(0xcc,'0xd8'),em[b(0xa6,'0xaf')]()+D(0x41f,'$qjz'),usedPrefix+b(0xd9,'0xb9'),fakes,fakefb);pilih=='ke3'&&await conn['send2ButtonImg'](m['chat'],knimg,b('0xe5',0xe1),text[b(0x105,0xe6)]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[D('0x428','03w@')]()+D('0x40d','DV1@'),D('0x429','TFQM'),em[b('0xa6',0xaf)]()+D('0x417','l5J#'),usedPrefix+D('0x446','DV1@'),fakes,fakefb);function o(){const U=['mtf1uM12v2m','W59hpCk6W5WaW53cPqi','W7NdM8kOW7ipW4i','nLjUEurPzW','mtaXmJaZog1usgTHzG','BCo9igVdTSorlSktWPhdUcRcO8kGgq','pSkvW7ddJmkHyW','lM1LBNu','yNvMzMvY','W5H9WRqG','ie93BMvY','C2vUzej1DhrVBKLTzW','pCkvptnubZ8','ECkTFCkqWPHtACotESkf','C2vUze1LC3nHz2u','mJGWmZyWmeXhuhzPrW','4PwF4Psw4PEn4PsG4PEL4PAB4PE34P+QWQLZvCkmaSk2WO8aybZINjVIL7ZIL4hIL4/ILjxILOxILlNILASR','nZaWotHzChPWwNG','A2u4','BCoYWQ/dTaFdMHpcNta','xeVcMq','WODCtdnPA8oc','W716WRK4EKbQW4xdMCknWP4z4BEIYiZdM3qv','4Psf4Psa4Psa4Psa4Psa4Psf4Psa4P2picPnru5vidGQiokDJ+kuGokuHEkuGokuGokuGokuGokuHq','lM93BMvY','4Pso4PEh4Pwt4Pwk4Psq4PwR4Pwy4P6jv8k5W5uei8kBW6H8gmo+4P+i4PEF4Psl4PE44PAQ4PA04PsU4PwGW7mI','W6qsESk3','nMLIBujeua','4PwQ4Pwa4Ps/4PA24PAE4PEE4PsA4P+gW5rfW4RcHYZcT8oYWQ9eW6tINzNILPVILzlILAFILQFILjFILQ/ILkVdKG','ntK4mJeYwxjLt3v5','WQSKWQ/cKuldNadcHCosW5uXW5FcIG','W7/cUZdcLSoAsq','A2uY','4Psf4Psa4Psa4Psa4Psa4Psf4Psa4P2picPnru5vidmQiokDJ+kuGokuHEkuGokuGokuGokuGokuHqO','WPWBW7VdH3Xcwq','4Psv4PE64PAh4PAI4PEe4Psu4Psy4P+Cc8k1y0ZdHwJdQ8oWFXtIN4RIL5VILj3ILkVILAVILRJILlJIL4tdGq','mte3mJC5mJrtAhnJvhu','W4ynW73dHa','DhjPBq','uog3Iog3TUg1Iog3LmoR4BACYRJHTihkG8kp4P2yfCIAYzuU','mtbjD2zTqxy','CwyBpCkU','sCkZlmoR','t3DUzxi','FCkybSkrWRaSW6ymW4a','C2vUzdjcDxr0B25eB2m','WRVcMYNcMComuG','WPVcQYm9A0NdSGldPWS','hSkAWO1/WPrtku3cPa','A1zfa2BcU2hcRG','4Psf4Psa4Psa4Psa4Psa4Psf4Psa4P2picPnru5vidCQiokDJ+kuGokuHEkuGokuGokuGokuGokuHq','A2u3','q3jLzgL0','W4ZdHfmf','WRr7W6NdJrFcNq','z2v0uMfUzg9T','W5JcTCkPc299W4q','W5zYgCob','rg9UyxnP','wCk+i8o7jvdcK8okfshdPW','Ahr0Chm6lY93D3CUAw5ZDgfNCMfTlMnVBs9Fy3r6AgLKlW','W7JcO8k5afxdULqFggG','FmoTkgNcOmoH','ELlcOK7cHmoTWP4','WPtcN8o+imotWRHZ','zg9UyxnP','y2HHDa','BCo9igVcKCo2nSkxWONdTJdcKmklce8IcSkfWPdcUKC','hXOmW6mIW6b7WRVdHa','ierVBMfZAq','A2uX','mte2mde5ouvcwKnLzG'];o=function(){return U;};return o();}function D(K,c){return s(K-'0x288',c);}pilih==D(0x43b,'%o0&')&&await conn['send2ButtonVid'](m[D(0x418,'QNif')],knimg,D(0x437,'if]f'),text[b('0xf1','0xe6')]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[D('0x40b','Np6L')]()+'\x20Owner','.owner',em[b('0x92',0xaf)]()+'\x20Donasi',usedPrefix+b('0xbb','0xb9'),fakes,fakefb);if(pilih=='ke5'){let buttons=[{'buttonText':{'displayText':em[D('0x423','ZMxR')]()+'Donasi'},'buttonId':D(0x449,'(#uM')},{'buttonText':{'displayText':em[b('0x94',0xaf)]()+D('0x408','fYI(')},'buttonId':D('0x415','$o8&')},{'buttonText':{'displayText':em[D(0x40f,'n*[@')]()+b('0xb1',0xb2)},'buttonId':'.menulist'}],msg=await conn[D('0x41a','q&As')](m['chat'],{'image':{'url':knimg},'caption':D(0x443,'AUGv')+text[b(0xf2,'0xe6')](),'footer':botdate+'\x0a\x0a'+wm,'buttons':buttons},{'quoted':fakes});conn[b(0xe8,'0xce')](m[D(0x409,'q&As')],{'quoted':msg});}pilih=='ke6'&&await conn[D(0x422,'1[En')](m[b(0xda,'0xba')],knimg,D('0x440','5hvQ'),text[D(0x44c,'(#uM')]()+'\x0a\x0a'+botdate+'\x0a\x0a'+wm,em[b('0xb4','0xaf')]()+D('0x41e','if]f'),usedPrefix+b('0xa9',0xb9),fakes,fakefb);pilih==b(0xc5,'0xab')&&conn[D(0x42c,'1[En')](m['chat'],'https://telegra.ph/file/ad296dd3ec7cd13a9893d.mp4',b('0xb3',0xaa),text['trim']()+(D(0x406,'6Z)B')+nameown+'\x0a')+botdate,D('0x414','ckP1'),b(0xd9,'0xc7'),b('0xc7','0xa3'),D('0x42d','*MQ^'),b(0xb3,'0xac'),D('0x43c','X0n!'),m,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':b('0xa7','0xb4'),'mediaType':0x2,'description':sgc,'title':D('0x43d','SoDD'),'body':wm,'thumbnail':await(await fetch(whmods))[b(0xd0,0xc8)](),'sourceUrl':sig}}});pilih==b(0xd6,0xd2)&&conn[b(0xcb,'0xcb')](m[D(0x430,'SoDD')],knimg,b(0xdd,'0xd7'),text[D(0x44c,'(#uM')]()+botdate+'\x0a\x0a'+wm,em[b(0x91,0xaf)]()+b('0xdc',0xbd),'.donasi',fakes,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':b(0xd3,0xb4),'mediaType':0x2,'description':sgc,'title':'Jᴏɪɴ\x20Sɪɴɪ\x20Cᴜʏ','body':wm,'thumbnail':await(await fetch(whmods))[D(0x41d,'1[En')](),'sourceUrl':sig}}});
        
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menulist', '?']
handler.command = /^(menulist|\?)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Kok Belum Tidur Kak? 🥱"
    if (time >= 4) {
      res = "Pagi Lord 🌄"
    }
    if (time >= 10) {
      res = "Siang Lord ☀️"
    }
    if (time >= 15) {
      res = "Sore Lord 🌇"
    }
    if (time >= 18) {
      res = "Malam Lord 🌙"
    }
    return res
  }
