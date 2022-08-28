function multiplo(nota){
  return Math.ceil(nota/5) * 5;
  
}

function arredondar(){
  
    var nota = document.getElementById("nota").value;
  if(nota < 40){
     document.getElementById("lista").innerHTML = "Reprovado";
    break;
  } 
    var notaString = nota.toString().split("");
    
      if(notaString[1] > 2){
        
        var ar = multiplo(nota);
  }
 
    
  document.getElementById("lista").innerHTML = ar;
  }
