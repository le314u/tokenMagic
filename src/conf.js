var fs = require('fs')

//Arquivo de configuração
async function openConf(nameArq){
    return await new Promise((resolve,reject)=>{
        fs.readFile(nameArq, 'utf-8', function (err, data) {
            if(err){
                console.log(err)
                reject(err)
            }
            resolve(data)
        });
    })
}

module.exports = {openConf: openConf}