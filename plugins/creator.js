let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
 // let res = JSON.parse(readFileSync('./json/emoji.json'))
 // let em = res.emoji

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : Ziro-MD 
${htjava} *✉️ Nama RL* : HAMBA ALLAH
${htjava} *♂️ Gender* : Boys
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : Private 🥶
${htjava} *🎨 Umur* : 18
${htjava} *🧮 Kelas* : SUDAH TAMAT
${htjava} *🧩 Hobby* : MODIFIKASI WHATSAPP "MODDER WHATSAPP"
${htjava} *💬 Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *🗺️ Tinggal* : Indo, Depok, Jawa Barat
${htjava} *❤️ Waifu* : -

${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *🐈 ɢɪᴛʜᴜʙ:* ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah kak ! o(〃＾▽＾〃)o'


// LIST MESSAGE MODEL OLD , NO SUPPORT WHATSAPP BASE NEW
/*
  const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "📱 • Nomor Owner", rowId: ".owner nomor"},
	{title: "📱 • Nomor Owner V2", rowId: ".whmods1"},
	{title: "📱 • Pengembang", rowId: ".whmods2"},
	{title: "📱 • Creator", rowId: ".whmods3"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌎 • Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}
*/

// LIST MESSAGE MODEL NEW , SUPPORT WHATSAPP BASE NEW
let namop = ["📱 • Nomor Owner",
"📱 • Nomor Owner V2",
"📱 • Pengembang",
"📱 • Creator",
"🎨 • Biodata",
"🌎 • Script",
"💹 • Donasi",
"🔖 • Sewa",
"🌟 • Buy Premium"
]

let idop = [".owner nomor",
".whmods1",
".whmods2",
".whmods3",
".owner bio",
".sc",
".donasi",
".sewa",
".premium"
]

let desop = ["Nomor Owner",
"Nomor Owner V2",
"Pengembang",
"Creator",
"Biodata",
"Script",
"Donasi",
"Sewa",
"Buy Premium"
]

function E(r,d){const M=g();return E=function(w,q){w=w-0xc3;let K=M[w];return K;},E(r,d);}function o(M,w){return r(w- -'0x3b4',M);}function d(E,r){const M=g();return d=function(w,q){w=w-0xc3;let K=M[w];if(d['zUtDks']===undefined){var x=function(o){const z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let t='',a='';for(let f=0x0,h,S,P=0x0;S=o['charAt'](P++);~S&&(h=f%0x4?h*0x40+S:S,f++%0x4)?t+=String['fromCharCode'](0xff&h>>(-0x2*f&0x6)):0x0){S=z['indexOf'](S);}for(let B=0x0,W=t['length'];B<W;B++){a+='%'+('00'+t['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(a);};const G=function(o,z){let t=[],a=0x0,f,h='';o=x(o);let S;for(S=0x0;S<0x100;S++){t[S]=S;}for(S=0x0;S<0x100;S++){a=(a+t[S]+z['charCodeAt'](S%z['length']))%0x100,f=t[S],t[S]=t[a],t[a]=f;}S=0x0,a=0x0;for(let P=0x0;P<o['length'];P++){S=(S+0x1)%0x100,a=(a+t[S])%0x100,f=t[S],t[S]=t[a],t[a]=f,h+=String['fromCharCode'](o['charCodeAt'](P)^t[(t[S]+t[a])%0x100]);}return h;};d['RKSBgt']=G,E=arguments,d['zUtDks']=!![];}const n=M[0x0],e=w+n,k=E[e];return!k?(d['bSWdxj']===undefined&&(d['bSWdxj']=!![]),K=d['RKSBgt'](K,q),E[e]=K):K=k,K;},d(E,r);}function g(){const z=['209vlxxTy','4PIc77IpienmsunlieHfuKuG4PIc77Ip','mZaXodG5meP0r3nAzW','ngL3Ag15qW','W5JcJ8k2WQ7cReii','mJa5DMX4Efr5','ueDZWR/dO8kbpsq','907753ZSoGhe','fSoWuCkHW5yOu8koBrz0WPa','WQTRvMyVhSoubSo3W5Sfdq','keys','mZy2mtmYrujzC09i','WPtdNGzWW6dcRCoHlheoqCkbuW','959796BOornw','45vmOIjL','nZy1mtKWmfnSvgznrW','68pEQIzR','W43cNCkzWPxdPmkcWRqQ','994046LzylXT'];g=function(){return z;};return g();}function r(E,d){const M=g();return r=function(w,q){w=w-0xc3;let K=M[w];if(r['ZkUwrq']===undefined){var x=function(G){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let z='',t='';for(let a=0x0,f,h,S=0x0;h=G['charAt'](S++);~h&&(f=a%0x4?f*0x40+h:h,a++%0x4)?z+=String['fromCharCode'](0xff&f>>(-0x2*a&0x6)):0x0){h=o['indexOf'](h);}for(let P=0x0,B=z['length'];P<B;P++){t+='%'+('00'+z['charCodeAt'](P)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(t);};r['OmbKzY']=x,E=arguments,r['ZkUwrq']=!![];}const n=M[0x0],e=w+n,k=E[e];return!k?(K=r['OmbKzY'](K),E[e]=K):K=k,K;},r(E,d);}(function(M,w){const q=M();function k(M,w){return r(w- -0x135,M);}function e(M,w){return d(w-0x5c,M);}function n(M,w){return E(w- -0x15,M);}while(!![]){try{const K=parseInt(n(0xba,0xbd))/0x1+parseInt(n('0xb7',0xbb))/0x2*(-parseInt(e('FdNE',0x124))/0x3)+-parseInt(k(-0x75,-0x72))/0x4*(parseInt(k(-0x69,-'0x66'))/0x5)+-parseInt(k(-0x68,-0x6a))/0x6+parseInt(n('0xbc',0xb2))/0x7*(parseInt(e('b@6N',0x12d))/0x8)+parseInt(n('0xb6','0xb9'))/0x9*(parseInt(k(-0x56,-'0x60'))/0xa)+parseInt(k(-0x67,-'0x70'))/0xb*(parseInt(n('0xb7','0xb8'))/0xc);if(K===w)break;else q['push'](q['shift']());}catch(x){q['push'](q['shift']());}}}(g,0xec0a1));function G(M,w){return E(w-0x217,M);}let row=Object[G('0x2e2','0x2e1')](namop,desop,idop)['map']((M,w)=>({'title':htki+'\x20'+dmenub+'\x20'+namop[M]+'\x20'+htka,'description':'\x0aNo.'+(0x1+w)+'\x0a'+htjava+desop[M]+'\x0a'+dmenuf,'rowId':''+idop[M]})),button={'buttonText':o(-'0x2da',-0x2e0),'description':teks,'footerText':wm};


  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            function d(E,r){var M=g();return d=function(w,q){w=w-0x105;var K=M[w];if(d['FqGWIc']===undefined){var x=function(o){var z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var t='',a='';for(var f=0x0,h,S,P=0x0;S=o['charAt'](P++);~S&&(h=f%0x4?h*0x40+S:S,f++%0x4)?t+=String['fromCharCode'](0xff&h>>(-0x2*f&0x6)):0x0){S=z['indexOf'](S);}for(var B=0x0,W=t['length'];B<W;B++){a+='%'+('00'+t['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(a);};var G=function(o,z){var t=[],a=0x0,f,h='';o=x(o);var S;for(S=0x0;S<0x100;S++){t[S]=S;}for(S=0x0;S<0x100;S++){a=(a+t[S]+z['charCodeAt'](S%z['length']))%0x100,f=t[S],t[S]=t[a],t[a]=f;}S=0x0,a=0x0;for(var P=0x0;P<o['length'];P++){S=(S+0x1)%0x100,a=(a+t[S])%0x100,f=t[S],t[S]=t[a],t[a]=f,h+=String['fromCharCode'](o['charCodeAt'](P)^t[(t[S]+t[a])%0x100]);}return h;};d['lCiyhp']=G,E=arguments,d['FqGWIc']=!![];}var n=M[0x0],e=w+n,k=E[e];return!k?(d['DhFbzz']===undefined&&(d['DhFbzz']=!![]),K=d['lCiyhp'](K,q),E[e]=K):K=k,K;},d(E,r);}function r(E,d){var M=g();return r=function(w,q){w=w-0x105;var K=M[w];if(r['stynyL']===undefined){var x=function(G){var o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var z='',t='';for(var a=0x0,f,h,S=0x0;h=G['charAt'](S++);~h&&(f=a%0x4?f*0x40+h:h,a++%0x4)?z+=String['fromCharCode'](0xff&f>>(-0x2*a&0x6)):0x0){h=o['indexOf'](h);}for(var P=0x0,B=z['length'];P<B;P++){t+='%'+('00'+z['charCodeAt'](P)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(t);};r['FRSZlU']=x,E=arguments,r['stynyL']=!![];}var n=M[0x0],e=w+n,k=E[e];return!k?(K=r['FRSZlU'](K),E[e]=K):K=k,K;},r(E,d);}function E(r,d){var M=g();return E=function(w,q){w=w-0x105;var K=M[w];return K;},E(r,d);}function G(M,w){return d(M- -'0x197',w);}(function(M,w){var q=M();function k(M,w){return E(M-'0x3c0',w);}function e(M,w){return d(w- -'0x394',M);}function n(M,w){return r(w- -0x159,M);}while(!![]){try{var K=-parseInt(n(-0x52,-'0x53'))/0x1*(parseInt(e('LvtN',-'0x287'))/0x2)+-parseInt(k('0x4d1','0x4d4'))/0x3*(-parseInt(n(-0x50,-'0x45'))/0x4)+-parseInt(e('rkgL',-0x28c))/0x5+-parseInt(n(-0x3d,-'0x44'))/0x6+parseInt(k(0x4d6,'0x4d9'))/0x7*(-parseInt(e('WQd9',-0x27d))/0x8)+-parseInt(e('ihL(',-0x27b))/0x9+-parseInt(n(-'0x44',-0x41))/0xa*(-parseInt(e('XppN',-'0x282'))/0xb);if(K===w)break;else q['push'](q['shift']());}catch(x){q['push'](q['shift']());}}}(g,0xac653));return await conn['sendListM'](m[G(-'0x92','xlvA')],button,row,m);function g(){var o=['ntmXotiYDhbyz1jU','12172loctuz','jCkgW73cJJWyWPFdHh5ME27cUa','WQ0CrSoeksjd','rt7cLCoHm8ofbWhdMmk0b8kLWRi','2epMkvl','531922tpXgRn','WRJdVdL/WQFdUrW','bmktWOa7WRTNn8khnrOZWQe','nZiZodK5CMfnz2DY','tN3cMwhcHx9TWOPj','1347ZgpNsz','lmkEWRtdV8k0DsO4hKlcMmkT','2017660GrfYBz','mtiXnZjSB2n0DxO','nZmZnJy0nhzMwejnzq','5960353RkzAdd','WPlcKmooW6XopvC','mZCWsLj3sejv','oxhcPhXuWRJcOKBcQqldLcW','imoAWPVdPG'];g=function(){return o;};return g();}
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
