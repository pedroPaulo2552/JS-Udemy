let btnAdd = window.document.getElementById('add');
let blockRes = window.document.getElementById('div-resp');
let objCadastro;
let pessoas = [];
btnAdd.addEventListener('click', addPessoa);

function addPessoa() {
   let nome = window.document.getElementById('inome').value;
   let validacao = validacaoNome(nome);
   if (validacao === false) {return}

   let sobrenome = window.document.getElementById('isobrenome').value;
   validacao = validacaoNome(sobrenome);
   if (validacao === false) {return}

   let peso = Number(window.document.getElementById('ipeso').value);
   validacao = validacaoNome(peso);
   if (validacao === false) {return}

   let altura = Number(window.document.getElementById('ialtura').value);
   validacao = validacaoNome(altura);
   if (validacao === false) {return}

   if (pessoas.length > 0) {
    
   }

   objCadastro = criaCadastro(nome, sobrenome, peso, altura);
   mostrarCadastro();
}


function validacaoNome(n) {
    if (n.length === 0 || n.length < 0) {
        window.alert('ERRO! CHEQUE OS DADOS NOVAMENTE');
        return false;
    }   
}




function criaCadastro (n, s, p, a) {
    return{
        nome: n,
        sobrenome: s,
        peso: p,
        altura: a,
        imc: p * (a^2)
    }
}

function mostrarCadastro() {
    blockRes.innerHTML += `<p><strong>${objCadastro.nome} ${objCadastro.sobrenome}</strong>, ${objCadastro.peso}KG, ${objCadastro.altura} altura, IMC: ${objCadastro.imc}</p>`
    console.log(pessoas);
}