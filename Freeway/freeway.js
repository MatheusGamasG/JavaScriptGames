    var canvas = document.querySelector('canvas');
    var pincel = canvas.getContext('2d');
    var audioMusic = document.getElementById('audiomusic');

    function autoplay() {
    audioMusic.play();
    audioMusic.volume = 0.1;
    audioMusic.loop = true;
    }

    function onloadImages () {
        window.onload = desenhaObjetos;
    }

    function desenhaObjetos() {
        pincel.drawImage(imagemAtor, xAtor, yAtor, 30, 30);
        for (var i = 0; i < imagemCarro.length; i++) {
            pincel.drawImage(imagemCarro[i], xCarro[i], yCarro[i], 80, 45);
        } 
    }

    function limpaTela() {
        pincel.clearRect(0, 0, 820, 400);
    }

    function placar() {
        pincel.fillStyle = 'indigo';
        pincel.font = '30px Courier'
        pincel.fillText (pontos + " PONTOS", 440, 27);
    }
    
    function movimentaJogo() {
        autoplay();
        limpaTela();
        carCollision();
        movimentaCarro();
        desenhaObjetos();   
        pontosAtor(); 
        placar();   
    } 

    document.onkeydown = capturaTeclado;
    setInterval(movimentaJogo, 8);

