
let numero = prompt("Digite o valor da compra, seu saldo é de 50$")
if(numero>50){
    alert('Compra não aprovada')
}
else if (numero<50){
    alert('Compra aprovada')
}
else{
    alert('Compra aprovada')
}
alert('indo para segunda parte')

var x= prompt('Digite um numero')
var y= prompt('Digite outro numero')
var s= prompt('Digite um sinal')

if(s==="+"){
    alert(x+y)
}
else if(s==="-"){
    alert(x-y)
}
else if(s==="*"){
    alert(x*y)
}
else if(s==="/"){
    alert(x/y)
}
else(alert("Não foi possivel calcular"))

alert('Agora estruturas de repetição')

let t= prompt('Digite o primeiro número')
let i =prompt('Digite o segundo número')
let q = prompt('Digite o terceiro número')
let z = prompt('Digite o quarto e ultimo número')


let soma = parseInt(t) + parseInt(i) + parseInt(q) + parseInt(z)

let media= (soma) / 4

alert(`Sua soma é de ${soma} e sua media de ${media}`)























