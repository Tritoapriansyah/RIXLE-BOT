const fs = require('fs')
const { exec } = require('child_process')

module.exports = {
name: ["editz"],
type: ["audio"],
useLimit: true,
description: "convert audio music to slow",
utilisation: userbot.prefix + "editz",

async execute(m) {
let { conn, args } = data

try {
        if (!args[0]) return m.reply("List Edit Yg Tersedia

Blown
Deep
Earrape
Fast
Fat
Nightcore
Reverse
Robot
Smooth
Tupai
Squirrel
Chipmunk")
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        let set
        if (/blown/.test(args[0])) set = '-af acrusher=.1:1:64:0:log'
        if (/deep/.test(args[0])) set = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrape/.test(args[0])) set = '-af volume=12'
        if (/fast/.test(args[0])) set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (/fat/.test(args[0])) set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (/nightcore/.test(args[0])) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reverse/.test(args[0])) set = '-filter_complex "areverse"'
        if (/robot/.test(args[0])) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/smooth/.test(args[0])) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/tupai|squirrel|chipmunk/.test(args[0])) set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) throw `_*Error!*_`
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, /vn/.test(args[0]), { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else throw `Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`
    } catch (e) {
        console.log("❌ GAGAL MENGEDIT AUDIO")
    }
}
}