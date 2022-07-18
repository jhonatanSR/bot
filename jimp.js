const jimp = require('jimp');

async function main(){
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    let mascara = await jimp.read('img/mascara.png');
    let fundo = await jimp.read('img/fundo.png');
    let foto = await jimp.read('img/foto.jpg');

    await foto.resize(150,150);
    await mascara.resize(150,150);

    foto.mask(mascara);
    fundo.print(fonte,230,180,"Jhonatan Souza");
    fundo.composite(foto, 10,70);
}

main()