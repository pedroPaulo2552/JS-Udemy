function meuEscopo() {
    const form = document.querySelector('form');
    const pessoas = [];
    const divBlock = document.querySelector('div');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        pessoas.push({
            nome,
            sobrenome,
            peso,
            altura
        })

        divBlock.innerHTML += `<p>${nome} ${sobrenome}, ${peso}KG, ${altura}CM</p>`;
        console.log(pessoas);

    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();