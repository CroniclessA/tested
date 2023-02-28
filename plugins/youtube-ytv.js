let limit = 80
import fetch from 'node-fetch'
import axios from 'axios'
import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command, isPrems, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
if (!args || !args[0]) throw 'Uhm... urlnya mana?'
try {
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title} = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Filesize:* ${video.fileSizeH}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) await conn.sendButton(m.chat, `*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Filesize:* ${video.fileSizeH}`, title + '.mp4', await(await fetch(link)).buffer(), [['🎀 Menu', '/menu']], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            jpegThumbnail: Buffer.alloc(0), contextInfo: {
            mimetype: 'video/mp4',
          externalAdReply :{
    body: 'Size: ' + video.fileSizeH,
    containsAutoReply: true,
    mediaType: 2, 
    mediaUrl: args[0],
    showAdAttribution: true,
    sourceUrl: args[0],
    thumbnailUrl: thumbnail,
    renderLargerThumbnail: true,
    title: 'Nihh Kak, ' + name,
     }}
  })
  } catch {
function E(I,l){return w(l- -'0x2d',I);}function b(I,l){return k(I-0x28f,l);}function k(w,a){const I=q();return k=function(l,O){l=l-0x99;let m=I[l];if(k['zUTqwG']===undefined){var i=function(b){const E='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let K='',y='';for(let F=0x0,d,U,Z=0x0;U=b['charAt'](Z++);~U&&(d=F%0x4?d*0x40+U:U,F++%0x4)?K+=String['fromCharCode'](0xff&d>>(-0x2*F&0x6)):0x0){U=E['indexOf'](U);}for(let H=0x0,S=K['length'];H<S;H++){y+='%'+('00'+K['charCodeAt'](H)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(y);};k['bACTIl']=i,w=arguments,k['zUTqwG']=!![];}const e=I[0x0],Q=l+e,Y=w[Q];return!Y?(m=k['bACTIl'](m),w[Q]=m):m=Y,m;},k(w,a);}function q(){const y=['C3vIBMfTzq','y2HHDa','zhvYyxrPB24','ndqYmtq2tM1KtgTH','sendListM','14FjbmYD','WQZIJzTjWQxdLcqyW4ZdUa','W6lcT8kyoCk/WQC','W49xW5tdM1ddN8ktg8kl','result','data','BwfW','*\x20teks\x20anda\x20untuk\x20mengubah\x20teks\x20lagi','f/gkS4GxW6y5WPxdIH8','Ahr0Chm6lY92Aw9SzxrPy3mUChCVyxbPl2rVD25SB2fKzxiVEw91DhvIzt9HCgLRzxK9yMv0ysz1CMW9','dMBcN8kMW646','tJldGSoKWR0IW5BdUSo2WQen','126128DCTflr','mti2mti4renuzMXY','mte4mdq0meD2s2nJBG','\x20Search\x20di\x20tombol\x20di\x20bawah...\x0a*Teks\x20yang\x20anda\x20kirim:*\x20','42PYiUMl','W7BdLSob','WQegWPJdKf/cPc5kW5VcJhD9','uSozW71jWP7dOMFdOIjjW4TzWQK','xmkVubX3W7NcNtdcPH9QWQmT','nZG3ndvZwev1Ahi','WOldH8oprq','mtrgAMjTwuq','☂️\x20','t2WFW59aW5CqmXNdHxm','hZLY','source','CMvZDwX0','65176kdolXQ','\x0a\x0aKetik\x20ulang\x20*','ifnLyxjJAcbeAxnPBMKG4PIc77Ip','591720QaaQMT','W4xdR8kUp8kF','nJeYELffuKL4'];q=function(){return y;};return q();}function a(w,k){const I=q();return a=function(l,O){l=l-0x99;let m=I[l];if(a['muufac']===undefined){var i=function(E){const K='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let y='',F='';for(let d=0x0,U,Z,H=0x0;Z=E['charAt'](H++);~Z&&(U=d%0x4?U*0x40+Z:Z,d++%0x4)?y+=String['fromCharCode'](0xff&U>>(-0x2*d&0x6)):0x0){Z=K['indexOf'](Z);}for(let S=0x0,V=y['length'];S<V;S++){F+='%'+('00'+y['charCodeAt'](S)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(F);};const b=function(E,K){let F=[],d=0x0,U,Z='';E=i(E);let H;for(H=0x0;H<0x100;H++){F[H]=H;}for(H=0x0;H<0x100;H++){d=(d+F[H]+K['charCodeAt'](H%K['length']))%0x100,U=F[H],F[H]=F[d],F[d]=U;}H=0x0,d=0x0;for(let S=0x0;S<E['length'];S++){H=(H+0x1)%0x100,d=(d+F[H])%0x100,U=F[H],F[H]=F[d],F[d]=U,Z+=String['fromCharCode'](E['charCodeAt'](S)^F[(F[H]+F[d])%0x100]);}return Z;};a['jAxHrm']=b,w=arguments,a['muufac']=!![];}const e=I[0x0],Q=l+e,Y=w[Q];return!Y?(a['irruCc']===undefined&&(a['irruCc']=!![]),m=a['jAxHrm'](m,O),w[Q]=m):m=Y,m;},a(w,k);}function w(k,a){const I=q();return w=function(l,O){l=l-0x99;let m=I[l];return m;},w(k,a);}(function(I,l){function Q(I,l){return k(I-0x14f,l);}function e(I,l){return w(I- -'0x158',l);}function Y(I,l){return a(l-0x2b,I);}const O=I();while(!![]){try{const m=-parseInt(e(-'0xae',-'0xb1'))/0x1*(parseInt(Q('0x204','0x211'))/0x2)+-parseInt(Y('weDC','0xdb'))/0x3+parseInt(Y('oAOg',0xdc))/0x4+parseInt(Q('0x202',0x202))/0x5*(parseInt(e(-'0xaa',-'0xa9'))/0x6)+parseInt(Y('mz17',0xdd))/0x7+-parseInt(e(-0x9d,-0xa8))/0x8*(-parseInt(Q('0x20f',0x21a))/0x9)+-parseInt(e(-0x9a,-'0x89'))/0xa;if(m===l)break;else O['push'](O['shift']());}catch(i){O['push'](O['shift']());}}}(q,0x84d90));function K(I,l){return a(I- -'0x115',l);}let res=await axios(b(0x336,'0x328')+text),json=res[E('0x6a','0x76')],dapet=json[K(-0x75,'$D)6')][K(-'0x66','VO4O')],row=Object[K(-'0x6d','evwU')](dapet)[b('0x333','0x33e')]((I,l)=>({'title':htjava+'📌\x20Quality:\x20'+I[b('0x328','0x324')],'description':K(-0x76,'U!pX')+json[b(0x349,'0x342')]['hosting']+'\x0a⏲️\x20Title:\x20'+json[b(0x349,0x354)]['meta'][K(-0x56,'xTgH')]+K(-0x6f,'dQvw')+I['url']+'\x0a📌\x20Source:\x20'+json[b('0x349','0x335')]['meta'][E(0x7a,'0x8c')]+'\x0a📌\x20Duration:\x20'+json[E(0x89,'0x75')]['meta'][b(0x32a,'0x32a')],'rowId':usedPrefix+K(-'0x61','EP#1')+I[K(-'0x5d','z&Kz')]})),button={'buttonText':E(0x76,0x89)+command+b(0x34c,'0x357'),'description':'⚡\x20Hai\x20'+name+',\x20Silakan\x20pilih\x20'+command+E('0x7c','0x80')+text+E(0x8d,'0x8f')+(usedPrefix+command)+E(0x8b,'0x78'),'footerText':wm};return conn[E('0x84',0x70)](m[b('0x329','0x330')],button,row,m);


}
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader', 'limitmenu']
handler.command = /^y(outube(mp4|vdl)|t((mp4|v)|vdl))$/i

handler.exp = 0
handler.register = false
handler.limit = true

export default handler
  /*} catch {
  let res = await fetch(`https://rest-beni.herokuapp.com/api/youtube?url=${args[0]}`)
let v = await res.json()
let caption = `*${htki} YOUTUBE ${htka}*

*ID:* ${v.result.id}
*title:* ${v.result.title}
*size:* ${v.result.size}
*quality:* ${v.result.quality}
`
await conn.sendButton(m.chat, caption, wm, v.result.thumb, [
                ['Mp4', `${usedPrefix}get ${v.result.link}`],
                ['Mp3', `${usedPrefix}get ${v.result.mp3}`]
            ], m)
  }*/


/*
let limit = 80
import fetch from 'node-fetch'
import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title} = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Quality:* 360p
*${htjava} Filesize:* ${video.fileSizeH}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) await conn.sendFile(m.chat, link, title + '.mp4', `
*${htki} YOUTUBE ${htka}*

*${htjava} Title:* ${title}
*${htjava} Quality:* 360p
*${htjava} Filesize:* ${video.fileSizeH}
`.trim(), m, false, {
    ..._thumb,
    asDocument: chat.useDocument
  })
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader', 'limitmenu']
handler.command = /^yt(v|mp4)?$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler
*/