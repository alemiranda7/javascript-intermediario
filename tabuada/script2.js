function tabuada() {
    let n = document.getElementById('txtn')
    let tab = document.getElementById('tabuada')

    if (n.value.length == 0) {
        alert('Numero Invalido')
    } else {
        let num = Number(n.value)
        let c = 1
        tab.innerHTML= ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
            c++
        }
    }
}