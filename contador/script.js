function contar() {
    var numInicio = document.getElementById('n1')
    var numFim = document.getElementById('n2')
    var numPasso = document.getElementById('n3')
    var resposta = document.getElementById('res')

    if (numInicio.value.length == 0 || numFim.value.length == 0) {
        alert('Dados Incorretos!')
    } else {
        resposta.innerHTML = 'Contando...'

        let i = Number(numInicio.value)
        let f = Number(numFim.value)
        let p = Number(numPasso.value)
        if(p == 0){
            alert('Passo inválido, será considerado Passo 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resposta.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resposta.innerHTML += `${c} \u{1F449}`
            }
        }
        resposta.innerHTML += ` \u{1F921}`
    }

}