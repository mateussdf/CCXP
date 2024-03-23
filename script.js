const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const contagem = " 01 dec 2024"

function countDown(){
    const dataccxp = new Date(contagem)
    const hoje = new Date()

    const segTotal = (dataccxp - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoDia(finalDias)
    hora.innerHTML = formatoHora(finalHoras)
    minuto.innerHTML = formatoMinuto(finalMinutos)
    segundo.innerHTML = formatoSegundo(finalSegundos)
}

function formatoDia(tempo){
    return tempo < 10? `0${tempo}D` : `${tempo}D`
}

function formatoHora(tempo){
    return tempo < 10? `0${tempo}H` : `${tempo}H`
}

function formatoMinuto(tempo){
    return tempo < 10? `0${tempo}M` : `${tempo}M`
}

function formatoSegundo(tempo){
    return tempo < 10? `0${tempo}S` : `${tempo}S`
}

countDown();
setInterval(countDown, 1000)
