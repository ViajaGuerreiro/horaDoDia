function carregar() {
    var msg = document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`


    if(hora >= 3 && hora <= 12) {
        //Bom dia!
        img.src = "img/fotomanha.png"
        document.body.style.background = '#8f714f'
    }
    else if(hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = "img/fototarde.png"
        document.body.style.background = '#dc9942'
    }
    else {
        //Boa noite!
        img.src = "img/fotonoite.png"
        document.body.style.background = '#1d3d4a'
    }
}
