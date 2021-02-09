var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');
var xbola = 300;
var ybola = 200;
var raio = 10;
var variacaoX = 5;
var variacaoY = 5;
var playerX = 10;
var playerY = 150;
var cpuX = 580;
var cpuY = 150;   
var up = 38;
var down = 40;
var pontosPlayer = 0;
var pontosCPU = 0;
var redeY = 10;
var handicap = 50;      
document.onkeydown = capturaTeclado;
setInterval(movimentaJogo, 1);

function desenhaBola(x, y, raio) {
    pincel.fillStyle="white";
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
    xbola = xbola + variacaoX;
    ybola = ybola + variacaoY;
}

function desenhaPlayer(x, y, x2, y2) {
    pincel.fillStyle="white";
    pincel.fillRect(x, y, 10, 100);
    pincel.fillRect(x2, y2, 10, 100);
}

function movimentaJogo() {
    limpaTela();
    mudaSentidoBola();
    ballCollision();  
    iaCPU();
    desenhaRede();  
    desenhaBola(xbola, ybola, raio);        
    desenhaPlayer(playerX, playerY, cpuX, cpuY); 
    calculaPontos();
    desenhaPlacar(pontosPlayer, pontosCPU);
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function mudaSentidoBola() {
    if (xbola >= 590 || xbola <= 10) {
        variacaoX *= -1;
    } 

    if (ybola >= 390 || ybola <= 10) {
        variacaoY *= -1;
    } 

}

function capturaTeclado(evento) {
    var hold = evento.keyCode;
    if (hold == up && playerY >= 0) {
        playerY -= 20;
    } else if (hold == down && playerY <= 300) {
        playerY += 20;
    }
}

function iaCPU() {
    
    if (ybola >= 50 && ybola <= 350) {
        cpuY = ybola - handicap;
    }
 
}

function ballCollision() {
    if (xbola - raio == playerX && ybola + raio >= playerY && ybola - raio <= playerY + 100) {
        variacaoX *= -1;
    }

    if (xbola + raio == cpuX && ybola + raio >= cpuY && ybola - raio <= cpuY + 100) {
        variacaoX *= -1;
    }

    if (xbola >= cpuX && ybola == cpuY) {
        variacaoY *= -1;
    }


}

function calculaPontos() {
    if (xbola <= 11) {
        pontosCPU += 1;
    } else if (xbola >= 590) {
        pontosPlayer += 1;
    }
}

function desenhaPlacar(player, cpu) {
    pincel.fillStyle = 'orange';
    pincel.fillRect(257, 20, 25, 20);
    pincel.font = '20px arial'
    pincel.fillStyle = 'black';
    pincel.fillText(player, 259, 37);
    pincel.fillStyle = 'orange';
    pincel.fillRect(317, 20, 25, 20);
    pincel.fillStyle = 'black';
    pincel.fillText(cpu, 319, 37)
}

function desenhaRede() {
    for (var i = 0; i <= 400; i = i + 40) {
    pincel.fillStyle = 'white';
    pincel.fillRect(290, (redeY + i), 20, 20);
    }
}
