#! /usr/bin/env node
const {openConf} = require('./conf')
const {composerImg} = require('./composer')

// Pega os argumentos CLI
const argV = process.argv.splice(2,process.argv.length-1)
const pathImg = argV[0]
const txtName = argV[1]

openConf('./conf/ficha.json').then((data)=>{
    conf = JSON.parse(data)
    conf.img = pathImg
    conf.txt = txtName
    composerImg(conf)
})