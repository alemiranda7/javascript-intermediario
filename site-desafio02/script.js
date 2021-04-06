function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')

    var data = new Date()
    var hora = data.getHours()

    //msg.innerHTML = `Agora são ${hora} horas mais ou menos.`

    if (hora > 0 && hora <= 12) {
        //BOM DIA
        img.src = 'img/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
        msg.innerHTML = `Bom dia, são ${hora} horas!`
    } else if (hora > 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
        msg.innerHTML = `Boa tarde, são ${hora} horas!`
    } else {
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.backgroundColor = '#515154'
        msg.innerHTML = `Boa noite, são ${hora} horas!`
    }
}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var textoAno = document.querySelector('input#txtano')
    //var radiosexo = document.querySelector('input#radsex')
    var resposta = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (textoAno.value.length == 0 || textoAno.value > ano) {
        alert('Data Inválida! tenta novamente.')
    } else {
        var radioSexo = document.getElementsByName('radsex')
        var idade = ano - textoAno.value
        var genero = ''
        if (radioSexo[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                //bebe
                img.setAttribute('src', 'img/bebeMenino.png')
            } else if (idade < 21) {
                //criança
                img.setAttribute('src', 'img/jovemHomem.png')
            } else if (idade < 50) {
                //homem
                img.setAttribute('src', 'img/adultoHomem.png')
            } else {
                //senhor
                img.setAttribute('src', 'img/senhorHomem.png')
            }
        } else if(radioSexo[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10) {
                //bebe
                img.setAttribute('src', 'img/bebeMenina.png')
            } else if (idade < 21) {
                //menina
                img.setAttribute('src', 'img/jovemMulher.png')
            } else if (idade < 50) {
                //mulher
                img.setAttribute('src', 'img/adultaMulher.png')
            } else {
                //senhora
                img.setAttribute('src', 'img/senhoraMulher.png')
            }
        }
        resposta.innerHTML = `Detectamos sexo ${genero} com idade  ${idade} anos.`
        resposta.style.textAlign = 'center'
        resposta.appendChild(img)
    }

}
