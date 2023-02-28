import fetch from 'node-fetch'
import axios from 'axios'
import {
  youtubeSearch
} from '@bochilteam/scraper'
let handler = async (m, {
  conn,
  command,
  text,
  usedPrefix
}) => {
  await conn.sendMessage(m.chat, {
      react: {
          text: '⏳',
          key: m.key,
      }
  })
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  if (!text) throw `Use example ${usedPrefix}${command} Dj Gama Naufal`
  try {
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let {
      title,
      description,
      thumbnail,
      videoId,
      durationH,
      viewH,
      publishedTime
  } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let caption = `
*${htki} PLAY ${htka}*

🔖 *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
`.trim()
  let listSections = []
  listSections.push(['[ PILIH OPSI YANG KAMU MAU ]', [
      ['🎶 Audio', usedPrefix + 'yta ' + url + ' yes'],
      ['🎥 Video', usedPrefix + 'ytv ' + url + ' yes'],
      ['🔎 Youtube Search', usedPrefix + 'yts ' + url]
  ]])

  return conn.sendList(m.chat, '', caption, author, '📣 GO TO YOUTUBE', listSections, m)
} catch {
  function d(E,r){const M=g();return d=function(w,q){w=w-0x1bb;let K=M[w];if(d['YZKOXg']===undefined){var x=function(o){const z='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let t='',a='';for(let f=0x0,h,S,P=0x0;S=o['charAt'](P++);~S&&(h=f%0x4?h*0x40+S:S,f++%0x4)?t+=String['fromCharCode'](0xff&h>>(-0x2*f&0x6)):0x0){S=z['indexOf'](S);}for(let B=0x0,W=t['length'];B<W;B++){a+='%'+('00'+t['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(a);};const G=function(o,z){let t=[],a=0x0,f,h='';o=x(o);let S;for(S=0x0;S<0x100;S++){t[S]=S;}for(S=0x0;S<0x100;S++){a=(a+t[S]+z['charCodeAt'](S%z['length']))%0x100,f=t[S],t[S]=t[a],t[a]=f;}S=0x0,a=0x0;for(let P=0x0;P<o['length'];P++){S=(S+0x1)%0x100,a=(a+t[S])%0x100,f=t[S],t[S]=t[a],t[a]=f,h+=String['fromCharCode'](o['charCodeAt'](P)^t[(t[S]+t[a])%0x100]);}return h;};d['ceuaVy']=G,E=arguments,d['YZKOXg']=!![];}const n=M[0x0],e=w+n,k=E[e];return!k?(d['dtQMJc']===undefined&&(d['dtQMJc']=!![]),K=d['ceuaVy'](K,q),E[e]=K):K=k,K;},d(E,r);}(function(M,w){const q=M();function e(M,w){return d(w- -0x230,M);}function k(M,w){return E(M- -'0x24a',w);}function n(M,w){return r(M- -'0x81',w);}while(!![]){try{const K=-parseInt(n('0x13b',0x146))/0x1+parseInt(e('ce6c',-0x4e))/0x2*(parseInt(n('0x148',0x14f))/0x3)+-parseInt(k(-'0x8c',-0x93))/0x4+parseInt(e('PQ2o',-0x63))/0x5*(parseInt(k(-'0x69',-0x7d))/0x6)+parseInt(n('0x13e',0x152))/0x7*(parseInt(k(-0x79,-0x8e))/0x8)+-parseInt(e('pEIy',-'0x5a'))/0x9+parseInt(n('0x143','0x142'))/0xa*(-parseInt(k(-'0x6e',-0x7a))/0xb);if(K===w)break;else q['push'](q['shift']());}catch(x){q['push'](q['shift']());}}}(g,0xe5579));let res=await axios(G(0x4f1,0x505)+text),json=res[G(0x4f6,'0x4f7')];function G(M,w){return E(M-0x331,w);}let dapet=json['result'];function o(M,w){return r(w-'0x279',M);}function z(M,w){return d(w- -'0x6',M);}function g(){const t=['l8oGaCkfpMldHCkcWPxcPCkrga','cUkmMIbiB3n0oIa','rrmIsmoRW7qE','E1RdKXpcQ3X8WQGrW6BcGZ00','DxbSB2fKx2rHDgu','qSoJWRFcJ0S','WPpdJSkmW5HLdCouECkVevT5W6/dISks','790976CrJWrq','vaNdOCk/W6q','DMLLD3m','W6ZcJSoYWOBcSq3dImkzkSoXWP8uW53cSa','duration','rqpdO8kRDmkhW5BcRSk9W4SjW4xcLaa','kCkxW5BdQSof','pNOBBub4aIdcSIZcJW/dLI8VW6NdQsBdR0JcV0z4rSktWPNcGLZcSmorjSkVWOldU8olW5qDyJDDWRuvDCo9W6RcMSk2cfm1tHhcJrm','DxbSB2fKzxi','4PQqW5lcOmoHxqa','rN3cSKNcMCoPW6ZdUG','286oaSRNV','4hKRVgg','8j+tJcbtB25NoIa','t8kltbm','hYj8WRxcNCoSW7vkdvldHSkpjSohW6/dPW','6sfHCsr','kKe1xMr8dq','ifnLyxjJAcbeAxnPBMKG4PIc77Ip','37691imMxVH','mZC2otfPBu14vKG','\x0a📌\x20Views:\x20','3528124KjMYPO','mtmZy01ZDvz3','https://violetics.pw/api/search/youtube-search?apikey=beta&query=','DMLKzw8','cVcFK4WGvxbSB2fKzwqGrgf0ztOG','DxjS','mJGWmZCWDLvrv1v2','data','cVcFK4WGrhvYyxrPB246ia','4PIc77Ipia','video','mtu3mtGXnenlyMPbCq'];g=function(){return t;};return g();}function E(r,d){const M=g();return E=function(w,q){w=w-0x1bb;let K=M[w];return K;},E(r,d);}function r(E,d){const M=g();return r=function(w,q){w=w-0x1bb;let K=M[w];if(r['mbIQaY']===undefined){var x=function(G){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let z='',t='';for(let a=0x0,f,h,S=0x0;h=G['charAt'](S++);~h&&(f=a%0x4?f*0x40+h:h,a++%0x4)?z+=String['fromCharCode'](0xff&f>>(-0x2*a&0x6)):0x0){h=o['indexOf'](h);}for(let P=0x0,B=z['length'];P<B;P++){t+='%'+('00'+z['charCodeAt'](P)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(t);};r['JkamBd']=x,E=arguments,r['mbIQaY']=!![];}const n=M[0x0],e=w+n,k=E[e];return!k?(K=r['JkamBd'](K),E[e]=K):K=k,K;},r(E,d);}let row=Object['values'](dapet)['map']((M,w)=>({'title':htjava+o(0x467,'0x457')+M[o(0x446,'0x43a')][z('3Un(',0x1cc)],'description':o('0x440',0x444)+M[o(0x45e,0x452)][z('sK2o','0x1d5')]+'\x0a⏲️\x20Title:\x20'+M[G('0x4f9','0x4e9')]['title']+'\x0a📎\x20URL:\x20'+M[z('F7DA','0x1d1')][o(0x447,'0x43c')]+o('0x43b',0x43b)+M['video'][o('0x444',0x447)]+o(0x433,'0x43f')+M[G('0x4f9',0x4ea)][G(0x506,0x502)]+G(0x4ee,'0x4f3')+M[z('1oxk',0x1c9)][o(0x43b,'0x44c')],'rowId':usedPrefix+'ytv\x20'+M[G('0x4f9',0x50c)][o('0x443',0x43c)]})),button={'buttonText':o('0x434','0x440')+command+o(0x452,0x45c),'description':z('k*cy',0x1d4)+name+z('CAD*','0x1da')+command+z('ce6c',0x1d2)+text+z('sjB^','0x1ca')+(usedPrefix+command)+'*\x20teks\x20anda\x20untuk\x20mengubah\x20teks\x20lagi','footerText':wm};return conn['sendListM'](m[z('xdvU','0x1d9')],button,row,m);

}
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(play((mp3|yt))?|ytplay)$/i
handler.limit = true
handler.register = true
export default handler
// ---------------------------old------------------------------------------------

/*import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

${htjava} *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
  `.trim(), wm, thumbnail, url, '📣 GO TO YOUTUBE', null, null, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true
handler.register = true

export default handler */
// ---------------------------old------------------------------------------------
/*
import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
try {
  if (!text) throw `Use example ${usedPrefix}${command} gustixa`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let whmodsdev = `*${htki} PLAY ${htka}*

  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}

⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  await conn.sendButton(m.chat, whmodsdev, wm, thumbnail, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${text}`]
], m, fdoc)
} 
catch {
if (!text) throw 'Input Query'
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*${htki} PLAY ${htka}*

  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}

⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  let buttons = [{ buttonText: { displayText: '🎶 Audio/Vn' }, buttonId: `${usedPrefix}yta ${url}` }, { buttonText: { displayText: '🎥 Video' }, buttonId: `${usedPrefix}ytv ${url}` }, { buttonText: { displayText: '🔎 Youtube Search' }, buttonId: `${usedPrefix}yts ${text}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '_Audio on progress..._', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg })
}

}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = true
handler.register = true

export default handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}

*/