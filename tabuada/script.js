function tabuada() {
    let n = document.getElementById('txtn')
    //let resp = document.getElementById('resp')
    let tab = document.getElementById('tabuada')

    if (n.value.length == 0) {
        alert('Número Inválido')
    } else {
        let n = Number(n.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

    /**if (n.value.length == 0) {
        alert('Por favor, digite um número válido')
    } else {
        if(n.value < 100) {
            resp.innerHTML = `O numero digitado foi ${n.value}`
        } else {
            resp.innerHTML = `O numero ${n.value} é menor que 100`
        }
    }
    resp.appendChild('Inserindo outro texto na div resp')
    **/

}