import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (/help/.test(text)) return m.reply(`
┌「 *Sambung Kata* 」
├ Sambung Kata adalah
│ permainan yang dimana setiap
│ pemainnya diharuskan membuat
│ kata dari akhir kata yang
│ berasal dari kata sebelumnya.
└────
┌「 *Peraturan* 」
├ Jawaban kata tidak mengandung
│ spasi dan imbuhan (me-, -an, dll).
├ .skata
│ untuk memulai
├ ketik *nyerah*
│ untuk menyerah
├ berhasil menjawab
│ mendapatkan 100 XP
└────`.trim())
    conn.skata = conn.skata ? conn.skata : {}
    let id = m.chat
    let res = await fetch('https://restapi.frteam.xyz/sambungkata?&apikey=Hrbot')
    let json = await res.json()
    if (id in conn.skata) return await conn.send1Button(m.chat, `^ soal ini belum terjawab!`, wm, 'Nyerah', 'nyerah', conn.skata[id][0])
    let kata = json.kata
    conn.skata[id] = [
        await conn.reply(m.chat, 'Mulai : *' + kata.toUpperCase() + '*\n\n*' + conn.filter(kata.toUpperCase()) + '... ?*\n\n*balas pesan ini untuk menjawab!*', m),
        kata.toLowerCase(),
        []
    ]
}
handler.help = ['sambungkata [help]']
handler.tags = ['game']
handler.command = /^s(ambung)?kata$/i

handler.limit = true

export default handler