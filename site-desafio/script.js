function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    
    var data = new Date()
    var hora = 19//data.getHours()

    //msg.innerHTML = `Agora são ${hora} horas mais ou menos.`

    if(hora > 0 && hora <= 12){
        //BOM DIA
        img.src = 'img/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
        msg.innerHTML = `Bom dia, são ${hora} horas!`
    }else if(hora > 12 && hora <= 18){
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
        msg.innerHTML = `Boa tarde, são ${hora} horas!`
    }else {
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.backgroundColor = '#515154'
        msg.innerHTML = `Boa noite, são ${hora} horas!`
    }
}