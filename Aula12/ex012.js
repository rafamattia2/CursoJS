var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log (`Agora são exatamente ${hora}:${minuto} horas.`)
if (hora >= 5 && hora < 12){
  console.log ('Bom dia!')
} else if (hora >= 12 && hora <= 18){
  console.log('Boa tarde!')
} else if (hora < 5){
  console.log('Boa madrugada!')
} else {
  console.log('Boa noite!')
}