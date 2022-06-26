function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  //var hora = 15 //linha para teste
  msg.innerText = `Agora são ${hora} horas e ${minutos} minutos.`
  if (hora >= 0 && hora < 12){
    //BOM DIA
    msg.innerHTML += `<p>Bom dia!</p>`
    img.src = 'imagens/manha.png'
    document.body.style.background = '#F1B56C'
  }else if(hora >=12 && hora <= 18){
    //BOA TARDE
    msg.innerHTML += `<p>Boa tarde!</p>`
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#91AAC0'
  }else{
    //BOA NOITE
    msg.innerHTML += `<p>Boa noite!</p>`
    img.src = 'imagens/noite.png'
    document.body.style.background = '#372E4D'
  }
}

