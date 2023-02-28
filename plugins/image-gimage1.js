import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let whmods = `*${htki} GOOGLE IMAGE ${htka}*
    🔎 *Result:* ${text}
    🌎 *Source:* Google`
    //conn.sendFile(m.chat, link, '', whmods, m)
    conn.sendButton(m.chat, whmods, botdate, link, [['Next', `.image ${text}`]], m)
    /* conn.sendHydrated (m.chat,`
*${htki} GOOGLE IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
`, wm, link, link, '🔗 URL', null, null, [['Next', `.image ${text}`],[null,null],[null,null]],m) */
}
handler.help = ['gimage1 <query>', 'image1 <query>']

handler.command = /^(gimage1|image1)$/i

export default handler

