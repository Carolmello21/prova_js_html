const $form = document.querySelector("form");  

function substituir(){
    var lista = [];
    var numero = document.getElementById("numero").value;
    
    for (let i = 1; i <= numero; i++){
      if(i%5==0 && i%9==0){
        lista[i] = "LuidyMoura";
      }
      else if(i%5==0){
        lista[i] = "Luidy";
      } else if(i%9==0){
        lista[i] = "Moura";
      } else{
       lista[i] = i;
      } 
    } 
  document.getElementById("lista").innerHTML = lista;
  }

