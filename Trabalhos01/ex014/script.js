function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  //var hora = 15 //linha para teste
  msg.innerText = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'imagens/manha.png'
    document.body.style.background = '#F1B56C'
  }else if(hora >=12 && hora <= 18){
    //BOA TARDE
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#91AAC0'
  }else{
    //BOA NOITE
    img.src = 'imagens/noite.png'
    document.body.style.background = '#372E4D'
  }
}

