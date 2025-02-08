alert('Seja bem-vindo ao jogo do número secreto!');
let numSecreto = 29;
let numEscolhido = prompt('Digite um número entre 1 e 30');
if (numEscolhido <= 30) {
    alert('Você pode jogar!!');
} else {
    alert ('Você não digitou um número entre 1 e 30, tente novamente!');
}
if (numEscolhido == numSecreto) {
    console.log('Parabéns! Você acertou o número secreto!(29)')
    alert('Você acertou o número secreto! (29)');
} else { 
console.log('Você errou! Tente outra vez')
alert ('Você errou! Que pena!');
}
