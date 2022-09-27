window.onload= cargar;

function cargar(){
var btncalcular = document.getElementById("btncalcular")
btncalcular.addEventListener("click",clickbtncalcular)

}
function clickbtncalcular(){
    var txtpeso = document.getElementById("txtpeso")
    var peso =txtpeso.value
  

    var txtaltura = document.getElementById("txtaltura")
    var altura =txtaltura.value
  


    var IMC= peso/(altura*altura)
    alert("su imc es :" + Math.round(IMC))
    
    
    if(IMC<15.9){
        alert("usted tiene delgadez muy severa")
         
     } else if(IMC==16 || IMC>=18.4){
         alert("Usted tiene delgaez")
 
     }else if(IMC==18.5 || IMC>=24.9){
         alert("Usted tiene peso saludable")
     
     }else if(IMC==25 || IMC>=29.9){
         alert("Usted tiene sobrepeso")
     
     }else if(IMC==30 || IMC>=34.9){
         alert("Usted tiene obecidad moderada")
     
     }else if(IMC==35 || IMC>=39.9){
         alert("Usted tiene obecida severa")
     
     }else if(IMC>=40){
         alert("Usted tiene obecidad morbida")}

}
