let handler = async(m, { conn, text, args, usedPrefix, command }) => {
  let namop = ["Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane ",
  "Mangkane "
]

let idop = [".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane",
".mangkane"
]

let desop = ["Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane ",
"Play Mangkane "]
let row = Object.keys(namop, desop, idop).map((v, index) => ({
  title: `${htki} ${dmenub} ${namop[v]}${1 + index} ${htka}`,
  description: `\nNo.${1 + index}\n${htjava}${desop[v]}${1 + index}\n${dmenuf}`,
  rowId: `${idop[v]}${1 + index}`
}))
let button = {
  buttonText: `☂️ ${command} Options Disini ☂️`,
  description: `⚡ Silakan pilih Sound Kane di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footerText: wm
}
    return await conn.sendListM(m.chat, button, row, m)
  }
  handler.help = ['soundkanemenu']
  handler.tags = ['fun']
  handler.command = /^(soundkanemenu)/i
  
  
  export default handler