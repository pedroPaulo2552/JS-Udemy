/*const data = new Date(1734203608348);
console.log(`Dia ${data.getDate()}`);
console.log(`Mês ${data.getMonth()}`);
console.log(`Ano ${data.getFullYear()}`);
console.log(`Hora ${data.getHours()}`);
console.log(`Minutos ${data.getMinutes()}`);
console.log(`Segundos ${data.getSeconds()}`);
console.log(`ms ${data.getMilliseconds()}`);
console.log(`Dia semana ${data.getDay()}`);
console.log(data.toString());*/

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}` 
}

function formataData(d) {
    const dia = zeroEsquerda(d.getDate());
    const Mes = zeroEsquerda(d.getMonth());
    const ano = zeroEsquerda(d.getFullYear());
    const hora = zeroEsquerda(d.getHours());
    const minuto = zeroEsquerda(d.getMinutes());
    const seg = zeroEsquerda(d.getSeconds());

    return `${dia}/${Mes}/${ano} ${hora}:${minuto}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
