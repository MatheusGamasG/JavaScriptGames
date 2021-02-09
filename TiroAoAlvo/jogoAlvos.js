    var canvas = document.querySelector('canvas');
    var pincel = canvas.getContext('2d');
    var x = 300;
    var y = 200;
    var raio = 10;
    var acertou = false;

    function desenhaAlvo(x, y, raio) {
        pincel.fillStyle = "red";
        pincel.beginPath();
        pincel.arc(x, y, raio + 20, 0, 2 * Math.PI);
        pincel.fill();
        pincel.fillStyle = 'white';
        pincel.beginPath();
        pincel.arc(x, y, raio + 10, 0, 2 * Math.PI);
        pincel.fill();
        pincel.fillStyle = 'red';
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function atualizaDesenho() {
        x = Math.random() * 570;
        if (x < 30) {
            x = x + 30
        }
        y = Math.random() * 340;
        if (y < 30) {
            y = y + 30
        }
        limpaTela();
        desenhaAlvo(x, y, 10);
    }
    
    function limpaTela() {
        pincel.clearRect(0, 0, 600, 370);
    }

    function clearPoints() {
        pincel.clearRect(550, 370, 600, 400)
    }

    function acerto(evento) {
        var xclick = evento.pageX - canvas.offsetLeft;
        var yclick = evento.pageY - canvas.offsetTop;
        if (xclick > x - 10 && xclick < x + 10 && yclick > y - 10 && yclick < y + 10) {
            acertou = acertou + 10;
            pincel.beginPath();
            pincel.fillStyle = 'black';
            pincel.font = "20px courier"
            clearPoints();
            pincel.fillText(acertou, 560, 385)
        }
    }

    canvas.onclick = acerto;

    setInterval(atualizaDesenho, 800);