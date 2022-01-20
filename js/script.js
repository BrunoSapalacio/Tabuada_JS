function tabuada(){
    var ini = document.querySelector("input#iniid")
    var fim = document.querySelector("input#fimid")
    var res = document.querySelector("textarea#res")
    res.innerHTML = ''
    if (ini.value.length == 0) {
        window.alert('[ERRO]: Digite um numero!')
    }
    else {
        let i = Number(ini.value)
        let f = Number(fimid.value)
        for(var c = 0; c <= f; c++) {
            let r = i * c;
            res.innerHTML += `${i} x ${c} = ${r}&#013;`
            //console.log(n)
            //console.log(c)
        }
    }
}