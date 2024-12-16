const para = document.querySelector('.paragrafos');
const ps = para.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const corFundo = estilosBody.backgroundColor;
console.log(corFundo);

for (valor of ps) {
    console.log(valor);
}

