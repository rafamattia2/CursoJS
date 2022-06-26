function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("txtano")
  var res = document.getElementById("res")

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert ('Oops.. Verifique os dados e tente novamente!!')
  } else {
      var fsex = document.getElementsByName ('radsex')
      var idade = ano - Number(fano.value)
      var gen = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      //HOMEM
      if (fsex[0].checked) {
        gen = 'Homem'
        if (idade >= 0 && idade < 5) {
          //bebe
          img.setAttribute('src', 'imagens/bebe-menino.png')
        }
        else if (idade >= 5 && idade <= 10) {
          //criança
          img.setAttribute('src', 'imagens/crianca-homem.png')
        }
        else if (idade > 10 && idade < 18) {
          //adolescente
          img.setAttribute('src', 'imagens/adol-homem.png')
        }
        else if(idade >=18 && idade < 60){
          //adulto
          img.setAttribute('src', 'imagens/adulto-homem.png')
        }else if(idade >= 60){
          //idoso
          img.setAttribute('src', 'imagens/idoso-homem.png')
        }
      //MULHER
      } else if (fsex[1].checked) {
        gen = 'Mulher'
        if (idade >= 0 && idade < 5) {
          //bebe
          img.setAttribute('src', 'imagens/bebe-menina.png')
        }
        else if (idade >= 5 && idade <= 10) {
          //criança
          img.setAttribute('src', 'imagens/crianca-mulher.png')
        }
        else if (idade > 10 && idade < 18) {
          //adolescente
          img.setAttribute('src', 'imagens/adol-mulher.png')
        }
        else if(idade >=18 && idade < 60){
          //adulto
          img.setAttribute('src', 'imagens/adulto-mulher.png')
        }else if(idade >= 60){
          //idoso
          img.setAttribute('src', 'imagens/idoso-mulher.png')
      } else {
        window.alert ('Oops.. Verifique os dados e tente novamente!!')
      }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Você tem ${idade} anos de idade!!!`
    res.appendChild(img)
  }
}