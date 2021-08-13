
var Jimp = require('jimp');

//Mescla duas imagens
function composerImg(conf){
    Jimp.read(conf["img"])
    .then((back)=>{
        conf.IMG_Back = back
        return Jimp.read(conf["layer"])})
    .then((front)=>{
        // Sobrepoe a imagem
        resize = conf["resize"]
        conf.IMG_Back.resize(resize["width"],resize["height"])
        conf.IMG_Front = front
        position = conf["position"]
        conf.IMG_Back.blit(conf.IMG_Front, position["x"], position["y"])
        // Escreve o Texto
        fonte = conf["fonte"]
        Jimp.loadFont(fonte).then(font => {
            conf.IMG_Back.print(font, 60, 55, conf.txt);
        }).then(()=>{
        // Redimensiona a img
            let scalar = 2
            let width = conf.IMG_Back.bitmap.width
            let height = conf.IMG_Back.bitmap.height
            conf.IMG_Back.resize(width*scalar,height*scalar)
            conf.IMG_Back.write('out/'+conf.txt+'.jpg')
        })
    })
}
module.exports = {
    composerImg: composerImg
}