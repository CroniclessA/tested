import { promises, readFileSync } from 'fs'
let handler = async (m, { conn, usedPrefix, command, args, text, isOwner, isAdmin, isROwner }) => {
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

	let namop = ["✨ | Welcome",
  "🚫 | Delete",
  "🚫 | autodelvn",
  "😐 | AutoReply & Anti Culik",
  "🌎 | Public",
  "🗣️ | Simi",
  "🗣️ | Auto Vn (simi-simi)",
  "🔞 | Nsfw",
  "🌟 | PremNsfwChat",
  "🔗 | Antilink",
  "🚫 | Antidelete",
  "📛 | Antitoxic",
  "⏏️ | Autolevelup",
  "🔎 | Detect",
  "📑 | Document",
  "👤 | GET MSG (AKTIF/NON AKTIF STORE MENU)",
  "👤 | ANTI SPAM",
//  "👤 | WhiteListMyContact",
  "❗ | Restrict",
  "😐 | Nyimak",
  "🔎 | Auto Bio",
//  "☑️ | Autoread",
  "💬 | PcOnly",
  "🏢 | GcOnly",
  "📷 | SwOnly"]

let idop = ["welcome",
"delete",
"autodelvn",
"autoreply",
"public",
"simi",
"autovn",
"nsfw",
"premnsfwchat",
"antilink",
"antidelete",
"antitoxic",
"autolevelup",
"detect",
"document",
"getmsg",
"antispam",
//"whitelistmycontact",
"restrict",
"nyimak",
"autobio",
//"autoread",
"pconly",
"gconly",
"swonly"]

let desop = ["Aktifkan/Non Aktifkan Fitur Welcome",
"Delete",
"Auto Delete VN",
"Auto Reply & Anti Culik",
"Aktifkan/Non Aktifkan Mode Public",
"Simi-Simi",
"Auto Vn (simi-simi)",
"Aktifkan/Non Aktifkan Menu Nsfw",
"Aktifkan/Non Aktifkan Prem Nsfw Chat",
"Anti Link",
"Anti Delete",
"Anti Toxic",
"Auto Level Up",
"Detect",
"Document",
"GET MSG (AKTIF/NON AKTIF STORE MENU)",
"ANTI SPAM",
//"WhiteListMyContact",
"Restrict",
"Nyimak",
"Auto Bio",
//"Auto Read",
"Mode PcOnly",
"Mode GcOnly",
"Mode SwOnly"]

function g(){const t=['ndy3ntu1ueTvtKzi','oufesvDIzq','BxnWAGFcT8kg','cGPlzxrPAYb1BgfUzYaQ','keys','mZaWndK5nhboveLquq','W7DYFhLmomopchtdQgtdKCou','405968AQXqXz','4PIjW5mrBZlcUa','mur0vuvMCq','mtbLuMzrr1u','*\x20teks\x20anda\x20untuk\x20mengubah\x20teks\x20lagi','10eRfQGU','W4iSh8kYxGP8WQddNWyvEmo7','1DtUEfq','zqOmfwtdOSorW4hdGJ7cRdxcUuy','10239278rbmpvA','1743111HZTgQG','4PIc77Ipia',',\x20Silakan\x20pilih\x20','map','mtjXC05HEeW','mtaYmZKYnZHYyM1WDKe'];g=function(){return t;};return g();}(function(M,w){function k(M,w){return d(w- -0x1df,M);}function e(M,w){return E(M- -'0x1d4',w);}const q=M();function n(M,w){return r(M-'0x13c',w);}while(!![]){try{const K=parseInt(n(0x249,0x242))/0x1*(parseInt(n(0x245,'0x23a'))/0x2)+-parseInt(e(-'0xd6',-'0xdb'))/0x3+-parseInt(n('0x23e','0x239'))/0x4*(-parseInt(n(0x240,0x23b))/0x5)+-parseInt(k('hkT!',-0xd5))/0x6+parseInt(e(-'0xd7',-0xd2))/0x7+-parseInt(e(-'0xc9',-0xcd))/0x8*(-parseInt(k('HkyR',-0xd9))/0x9)+parseInt(e(-'0xdb',-'0xda'))/0xa*(-parseInt(k('HkyR',-'0xe3'))/0xb);if(K===w)break;else q['push'](q['shift']());}catch(x){q['push'](q['shift']());}}}(g,0xbbac8));function z(M,w){return d(w-0x397,M);}function d(E,r){const M=g();return d=function(w,q){w=w-0xf7;let K=M[w];if(d['NKmqLN']===undefined){var x=function(o){const z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let t='',a='';for(let f=0x0,h,S,P=0x0;S=o['charAt'](P++);~S&&(h=f%0x4?h*0x40+S:S,f++%0x4)?t+=String['fromCharCode'](0xff&h>>(-0x2*f&0x6)):0x0){S=z['indexOf'](S);}for(let B=0x0,W=t['length'];B<W;B++){a+='%'+('00'+t['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(a);};const G=function(o,z){let t=[],a=0x0,f,h='';o=x(o);let S;for(S=0x0;S<0x100;S++){t[S]=S;}for(S=0x0;S<0x100;S++){a=(a+t[S]+z['charCodeAt'](S%z['length']))%0x100,f=t[S],t[S]=t[a],t[a]=f;}S=0x0,a=0x0;for(let P=0x0;P<o['length'];P++){S=(S+0x1)%0x100,a=(a+t[S])%0x100,f=t[S],t[S]=t[a],t[a]=f,h+=String['fromCharCode'](o['charCodeAt'](P)^t[(t[S]+t[a])%0x100]);}return h;};d['MWJBGE']=G,E=arguments,d['NKmqLN']=!![];}const n=M[0x0],e=w+n,k=E[e];return!k?(d['ZrOrdZ']===undefined&&(d['ZrOrdZ']=!![]),K=d['MWJBGE'](K,q),E[e]=K):K=k,K;},d(E,r);}let row=Object[G(0x1bf,0x1b3)](namop,desop,idop)[G(0x1b8,'0x1ad')]((M,w)=>({'title':htki+'\x20'+command+'\x20'+namop[M]+'\x20'+htka,'description':'\x0aNo.'+(0x1+w)+'\x0a'+htjava+desop[M]+'\x0a'+dmenuf,'rowId':usedPrefix+command+'\x20'+idop[M]}));function G(M,w){return E(M-'0xb7',w);}function r(E,d){const M=g();return r=function(w,q){w=w-0xf7;let K=M[w];if(r['GExuSA']===undefined){var x=function(G){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let z='',t='';for(let a=0x0,f,h,S=0x0;h=G['charAt'](S++);~h&&(f=a%0x4?f*0x40+h:h,a++%0x4)?z+=String['fromCharCode'](0xff&f>>(-0x2*a&0x6)):0x0){h=o['indexOf'](h);}for(let P=0x0,B=z['length'];P<B;P++){t+='%'+('00'+z['charCodeAt'](P)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(t);};r['QeHlUU']=x,E=arguments,r['GExuSA']=!![];}const n=M[0x0],e=w+n,k=E[e];return!k?(K=r['QeHlUU'](K),E[e]=K):K=k,K;},r(E,d);}function E(r,d){const M=g();return E=function(w,q){w=w-0xf7;let K=M[w];return K;},E(r,d);}function o(M,w){return r(M-'0x19f',w);}let button={'buttonText':o(0x29e,'0x29d')+command+'\x20Options\x20Disini\x20☂️','description':z('1Ch@','0x4a3')+name+G(0x1b7,0x1b5)+command+'\x20Options\x20di\x20tombol\x20di\x20bawah...\x0a*Teks\x20yang\x20anda\x20kirim:*\x20'+text+o('0x2a6','0x2a8')+(usedPrefix+command)+G('0x1af','0x1b0'),'footerText':wm};


	
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      case 'autovn':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoVn = isEnable
      break
     case 'detect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
       break
		  case 'autoreply':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoReply = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
      case 'autobio':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoBio = isEnable
      break
      case 'getmsg':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.getmsg = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antidelete = !isEnable
      break
     case 'autodelvn':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.autodelvn = isEnable
       break
     case 'document':
       chat.useDocument = isEnable
       break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      case 'simi':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.simi = isEnable
      break
      case 'nsfw':
        if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }}
      chat.nsfw = isEnable
      break
      case 'premnsfwchat':
        if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }}
      chat.premnsfw = isEnable
      break
    /* case 'toxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = !isEnable
       break */
     case 'antitoxic':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiToxic = isEnable
       break
       case 'antispam':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       chat.antiSpam = isEnable
       break
     case 'autolevelup':
       isUser = true
       user.autolevelup = isEnable
       break
 /*    case 'mycontact':
     case 'mycontacts':
     case 'whitelistcontact':
     case 'whitelistcontacts':
     case 'whitelistmycontact':
     case 'whitelistmycontacts':
       if (!isOwner) {
         global.dfail('owner', m, conn)
         throw false
       }
       conn.callWhitelistMode = isEnable
       break */
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    /*case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break*/
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      function G(M,w){return E(M- -0x317,w);}function E(r,d){var M=g();return E=function(w,q){w=w-0x10b;var K=M[w];return K;},E(r,d);}function r(E,d){var M=g();return r=function(w,q){w=w-0x10b;var K=M[w];if(r['brIXqB']===undefined){var x=function(G){var o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var z='',t='';for(var a=0x0,f,h,S=0x0;h=G['charAt'](S++);~h&&(f=a%0x4?f*0x40+h:h,a++%0x4)?z+=String['fromCharCode'](0xff&f>>(-0x2*a&0x6)):0x0){h=o['indexOf'](h);}for(var P=0x0,B=z['length'];P<B;P++){t+='%'+('00'+z['charCodeAt'](P)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(t);};r['gSvKhU']=x,E=arguments,r['brIXqB']=!![];}var n=M[0x0],e=w+n,k=E[e];return!k?(K=r['gSvKhU'](K),E[e]=K):K=k,K;},r(E,d);}function d(E,r){var M=g();return d=function(w,q){w=w-0x10b;var K=M[w];if(d['pzIxzd']===undefined){var x=function(o){var z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var t='',a='';for(var f=0x0,h,S,P=0x0;S=o['charAt'](P++);~S&&(h=f%0x4?h*0x40+S:S,f++%0x4)?t+=String['fromCharCode'](0xff&h>>(-0x2*f&0x6)):0x0){S=z['indexOf'](S);}for(var B=0x0,W=t['length'];B<W;B++){a+='%'+('00'+t['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(a);};var G=function(o,z){var t=[],a=0x0,f,h='';o=x(o);var S;for(S=0x0;S<0x100;S++){t[S]=S;}for(S=0x0;S<0x100;S++){a=(a+t[S]+z['charCodeAt'](S%z['length']))%0x100,f=t[S],t[S]=t[a],t[a]=f;}S=0x0,a=0x0;for(var P=0x0;P<o['length'];P++){S=(S+0x1)%0x100,a=(a+t[S])%0x100,f=t[S],t[S]=t[a],t[a]=f,h+=String['fromCharCode'](o['charCodeAt'](P)^t[(t[S]+t[a])%0x100]);}return h;};d['kOUeET']=G,E=arguments,d['pzIxzd']=!![];}var n=M[0x0],e=w+n,k=E[e];return!k?(d['JIElXa']===undefined&&(d['JIElXa']=!![]),K=d['kOUeET'](K,q),E[e]=K):K=k,K;},d(E,r);}function g(){var o=['hrJdMSoEWOBdKmkNWPldHmk4W458','mZi4ntq1svj4uvzH','test','mti2mdm3nMz1BNfNEa','337702SLKQPa','umoBW7ldVs1wW6ddKW','oSkHWR/cJSkDWQH3kq','349640LDUWKC','WPrNgmkNF8k7WRetqmk5EepdTG','nti3odK4zKztwvnU','W7aFo01fbwdcK0RcLCkrpa','WPvTg8kVCmkXW6quxCksqMe','mwPPyML1sW','chat','W6hcUMOZWPmtW7Gxr8oRWRr0','nJi2mda1uwDeswHr'];g=function(){return o;};return g();}(function(M,w){function e(M,w){return d(M-0x220,w);}function k(M,w){return E(M-'0x305',w);}var q=M();function n(M,w){return r(w- -0x37a,M);}while(!![]){try{var K=parseInt(n(-0x259,-'0x261'))/0x1*(-parseInt(e(0x32d,'hp)a'))/0x2)+parseInt(n(-'0x269',-0x26c))/0x3+parseInt(k(0x419,0x415))/0x4+parseInt(e(0x32b,'(P4o'))/0x5*(-parseInt(e(0x333,'D1UA'))/0x6)+parseInt(e(0x338,'43LC'))/0x7+-parseInt(n(-'0x272',-0x26a))/0x8+parseInt(e(0x335,'43LC'))/0x9;if(K===w)break;else q['push'](q['shift']());}catch(x){q['push'](q['shift']());}}}(g,0x38faa));if(!/[01]/[G(-0x208,-0x20e)](command))return conn['sendListM'](m[G(-0x1fd,-'0x1ff')],button,row,fakes);
      
      throw false
  }
  
  conn.send2ButtonDoc(m.chat, `*${htki} OPTIONS ${htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, author, `${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`, '🎀 Menu', '.menu', fakes, adReply)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler