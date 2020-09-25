const tecla = document.querySelectorAll('.tecla')
const barra = document.getElementById('barra');
let operador
//Teclado de la calculadora
const teclado = (event) => {
    const texto = event.target.innerText
    if (texto == '<--') {
        barra.innerHTML = barra.innerText.slice(0, -1)
    } else {
        barra.innerText += texto
    }if(texto == '+' || texto == '-' || texto == 'x' ||texto=='/'){
        operador = texto
    }
    if (texto == '=') {
        operar(barra.innerHTML,operador)
        barra.innerHTML = ''
    }
}

for (let i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('click', teclado)
}
//Operar la calculadora
const historial = document.getElementById('historial')
const operar = (barra, operador) => {
    const valores = barra.split(operador)
    switch(operador){
        case '+':
            const suma =parseInt(valores[0])+parseInt(valores[1])
            historial.innerHTML += `<li> ${barra}   ${suma} </li>`
            break;
        case '-':
            const resta =parseInt(valores[0])-parseInt(valores[1])
            historial.innerHTML += `<li> ${barra}   ${resta} </li>`
            break;
        case 'x':
            const multi =parseInt(valores[0])*parseInt(valores[1])
            historial.innerHTML += `<li> ${barra}   ${multi} </li>`
            break;
        case '/':
            const divi =parseInt(valores[0])/parseInt(valores[1])
            historial.innerHTML += `<li> ${barra}   ${divi} </li>`
            break;

    }
}

// const historial = document.getElementById('historial')
// const operar = (barra, operador) => {
//     const valores = barra.split(operador)
//     switch(operador){
//         case '+':
//             const suma =parseInt(valores[0])+parseInt(valores[1])
//             historial.innerHTML += `<li> ${barra}   ${suma} </li>`
//             break;
//         case '-':
//             const resta =parseInt(valores[0])-parseInt(valores[1])
//             historial.innerHTML += `<li> ${barra}   ${resta} </li>`
//             break;
//         case 'x':
//             const multi =parseInt(valores[0])*parseInt(valores[1])
//             historial.innerHTML += `<li> ${barra}   ${multi} </li>`
//             break;
//         case '/':
//             const divi =parseInt(valores[0])/parseInt(valores[1])
//             historial.innerHTML += `<li> ${barra}   ${divi} </li>`
//             break;

//     }
// }