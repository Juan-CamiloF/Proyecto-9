//Declaración de variables
const tecla = document.querySelectorAll(".tecla");
const barra = document.getElementById("barra");
const borrar = document.getElementById("borrar");
const borrarH = document.getElementById("borrarHistorial");

let operador;
let numero1, numero2;

//Función del teclado
const teclado = (event) => {
  const texto = event.target.innerText;
  //Capto el operador
  if (texto == "+" || texto == "-" || texto == "x" || texto == "/") {
    if(!operador){
        operador = texto;
        console.log("operador", operador);
        if (barra != "") {
        // barra.innerText = operador;
        numero1 = parseInt(barra.innerText);
        barra.innerText = texto;
        console.log("numero1", numero1);
        } 
    }
    if(operador==undefined){
        console.log('ijole')
        operador = texto;
    }else {
        barra.innerText = operador;
        }
    
  } else {
    if (texto == "←") {
      barra.innerHTML = barra.innerText.slice(0, -1);
    } else {
      hacerTexto(texto);
    }
  }
  //Capto los números
  if (Number.isInteger(parseInt(numero1)) && operador) {
    if (
      barra.innerText == "+" ||
      barra.innerText == "-" ||
      barra.innerText == "x" ||
      barra.innerText == "/"
    ) {
      barra.innerText = "";
    }
    if (texto == "=") {
      numero2 = barra.innerText;
      barra.innerText = "";
      console.log(numero2);
      calcular(numero1, numero2, operador, barra);
      numero2 = 0;
      operador = '';
    }
  }

  //Borrar elementos de la barra
  borrar.addEventListener("click", () => {
    const barra = document.getElementById("barra");
    barra.innerText = "";
    numero1=0;
    operador ='';
  });
  //Borrar elementos del historial
  borrarH.addEventListener("click",()=>{
      const historial = document.getElementById('historial');
      historial.innerText = "";
  });

  //Función para la calculadora
  function calcular(numero1, numero2, operador, barra) {
    const historial = document.getElementById("historial");
    let result;
    switch (operador) {
      case "+":
        result = parseInt(numero1) + parseInt(numero2);
        barra.innerText = result;
        historial.innerHTML += `<li>${numero1} + ${numero2}  ${result}</li>`;
        break;
      case "-":
        result = parseInt(numero1) - parseInt(numero2);
        barra.innerText = result;
        historial.innerHTML += `<li>${numero1} - ${numero2}  ${result}</li>`;
        break;
      case "*":
        result = parseInt(numero1) * parseInt(numero2);
        barra.innerText = result;
        historial.innerHTML += `<li>${numero1} * ${numero2}  ${result}</li>`;
        break;
      case "/":
        if (parseInt(numero2) == 0) {
          historial.innerHTML += `<li>División en 0</li>`;
        } else {
          result = parseInt(numero1) / parseInt(numero2);
          barra.innerText = result;
          historial.innerHTML += `<li>${numero1} / ${numero2}  ${result}</li>`;
        }
        break;
      default:
        historial.innerHTML += `<li>0</li>`;
        break;
    }
  }
};

//Hacer texto
function hacerTexto(texto) {
  barra.innerText += texto;
}
//Tocar el evento
for (let i = 0; i < tecla.length; i++) {
  tecla[i].addEventListener("click", teclado);
}
