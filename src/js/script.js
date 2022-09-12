const resultado = document.getElementById("resultado");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");

const calcIMC = () => {
  if (altura.value !== "" && peso.value !== "") {
    let imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
      classificacao = "Obesidade Grau II";
    } else if (imc > 40) {
      classificacao = "Obesidade Grau III";
    } else {
      imc = "";
      classificacao = "Preencha os campos";
    }

    resultado.innerHTML = `IMC: ${imc} (${classificacao})`;
  } else {
    altura.value = 0;
    peso.value = 0;
  }
};
