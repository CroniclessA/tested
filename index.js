console.log("🐾 Starting...")

import yargs from "yargs"
import cfonts from "cfonts"
import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { createRequire } from "module"
import { createInterface } from "readline"
import { setupMaster, fork } from "cluster"
import { watchFile, unwatchFile } from "fs"

// = PACKAGE IMPORT AND VARS = //
import express from "express"
import monitor from "express-status-monitor"
const app = new express()

// https://stackoverflow.com/a/50052194
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Bring in the ability to create the "require" method
const { name, author } = require(join(__dirname, "./package.json")) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/

say("ZiroBotz-MD", {
  font: "shade",
  align: "center",
  colors: ["red", "yellow"]
})
say("🐾 RPG BOT Multi-Device ZiroBotz-MD", {
  font: "console",
  align: "center",
  colors: ["green"]
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(" "), {
    font: "console",
    align: "center",
    colors: ["magenta"]
  })
  say("🌎 MEMUAT SOURCE...", {
    font: "console",
    align: "center",
    colors: ["red"]
  })
  say("📑 MEMUAT PLUGINS...", {
    font: "console",
    align: "center",
    colors: ["yellow"]
  })
  say("✅ DONE !", {
    font: "console",
    align: "center",
    colors: ["green"]
  })
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = fork()
  p.on("message", data => {
    console.log("[✅RECEIVED]", data)
    switch (data) {
      case "reset":
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case "uptime":
        p.send(process.uptime())
        break
    }
  })
  p.on("exit", (_, code) => {
    isRunning = false
    console.error("[❗]Exited with code:", code)
    if (code !== 0) return start(file)
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts["test"])
    if (!rl.listenerCount()) rl.on("line", line => {
      p.emit("message", line.trim())
    })
  // console.log(p)
}

start("main.js")

// = HOME PAGE(s) = //
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/home.html")
})

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/html/home.html")
})

app.get("/game", (req, res) => {
  res.sendFile(__dirname + "/html/game.html")
})

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + "/html/chat.html")
})

app.get("/tools", (req, res) => {
  res.sendFile(__dirname + "/html/tools.html")
})

app.get("/music", (req, res) => {
  res.sendFile(__dirname + "/html/music.html")
})

app.get("/views", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

// = CHECK IF A ENDPOINT IS INVALID = //
app.get("/*", (req, res) => {
  res.send({ error: "Endpoint: home, game, chat, tools, music" })
})

// = TO RUN API AND LOG IT = //
app.listen(5000, () => {
  console.log("BOT is up and running")
})

// = FOR CLEAN LOOKING AND LOGS = //
app.set("json spaces", 1); 
app.use(monitor())

// = THE END = //