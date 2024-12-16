const nome = ['Pedro', 'Paulo', 'Maria', 'JUliana'];

/*console.log('For In')
for (i in nome) {
    console.log(i);
}
console.log('#####')
console.log('For OF')

for (valor of nome) {
    console.log(valor)
}*/

/*nome.forEach(function(valor, indice) {
    console.log(valor, indice);
})*/

const nomes = {
    nome: 'Pedro',
    Sobrenome: 'Paulo'
}

 for (valor in nomes) {
    console.log(valor, nomes[valor]);
};


