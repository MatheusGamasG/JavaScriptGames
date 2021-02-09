var imagemCarro = [document.getElementById('carro'), document.getElementById('carro2'), document.getElementById('carro3'), document.getElementById('carro'), document.getElementById('carro2'), document.getElementById('carro3')]
var xCarro = [810, 810, 810, 810, 810, 810]
var yCarro = [40, 94, 148, 208, 262, 316]
var speed = [3, 11, 8, 2, 7, 5]
var somColisao = document.getElementById('audiocolis');

function movimentaCarro() {
    for (var i = 0; i < imagemCarro.length; i++) {
        if (xCarro[i] + 80 < 0) {
            xCarro[i] = 810;        
        } else {
        xCarro[i] -= speed[i];
        }
    }
}

function carCollision() {
    for (var i = 0; i < imagemCarro.length; i++) {
        if (yAtor + 30 >= yCarro[i] && yAtor <= yCarro[i] + 45 && xAtor + 30 >= xCarro[i] && xAtor <= xCarro[i] + 80) {
            yAtor = 367;
            somColisao.play();
            pontos = 0;
        }
    }
}
