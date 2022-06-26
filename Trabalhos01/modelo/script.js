var sec = window.document.getElementById('sec')
sec.addEventListener('click', change)
//sec.addEventListener('mouseout', change)
function change(){
  if(sec.innerText == 'Fofo'){
  sec.innerText = 'Melhor jax da minha rua'
}else{
  sec.innerText = 'Fofo'
}
}
