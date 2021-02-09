var imagemAtor = document.getElementById('ator');
var yAtor = 367;
var xAtor = 400;  
var pontos = 0;
var somPonto = document.getElementById('audiopts');

function capturaTeclado(evento) {
    var hold = evento.keyCode;
    if (hold == 38) {
        yAtor -= 10;
    } else if (hold == 40) {
        if (yAtor == 367) {
            yAtor = 367;
        } else {
        yAtor += 10;
        }
    }
}

function pontosAtor() {
    if (yAtor <= 0) {
        yAtor = 367;
        pontos += 1;
        somPonto.play();
    }

}