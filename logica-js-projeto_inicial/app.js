alert('Seja bem-vindo ao jogo do número secreto!');
let numSecreto = 8;
console.log (numSecreto); //armazenar o numero no console
let numEscolhido = prompt('Digite um número entre 1 e 30');
console.log ('Valor do Chute: ', numEscolhido); //armazenar o chute no console

if (numEscolhido <= 30) { //se o num escolhido for menor ou igual que 30
    alert('Você pode jogar!!');
} else {
    alert ('Você não digitou um número entre 1 e 30, tente novamente!');
}

if (numEscolhido == numSecreto) { //se o numero escolhido for igual ao num secreto
    alert(`Você acertou o número secreto: ${numSecreto}`); //template string, entre crases ${NOME DA VARIAVEL}
} else { 
    console.log ('Valor do Número Secreto', numSecreto);
alert ('Você errou! Que pena!');}

if (numEscolhido < numSecreto) {
    alert('O número secreto é maior que esse número');
} else {
    alert('O número secreto é menor que esse número');
}


