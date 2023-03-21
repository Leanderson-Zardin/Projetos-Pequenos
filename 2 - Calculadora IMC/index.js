const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  let valorIMC = (peso / altura**2).toFixed(1);

  if(nome == "" && altura == "" && peso == "") {
    return resultado.textContent = "Você deve preencer todos os campos!"
  }

  let classificacao = '';
  if(valorIMC < 18.5) {
    classificacao = "abaixo do peso normal.";
  } else if(valorIMC < 25) {
    classificacao = "com um peso normal.";
  } else if(valorIMC < 30) {
    classificacao = "com excesso de peso!"
  } else if(valorIMC < 35) {
    classificacao = "com Obesidade I!"
  } else if(valorIMC < 40) {
    classificacao = "com Obesidade II!"
  } else {
    classificacao = "com Obesidade III. Cuidado!"
  }

  resultado.textContent = `Olá ${nome}! Seu IMC é ${valorIMC} e você está ${classificacao}`;
}

calcular.addEventListener('click', imc)