function resolv(val) {
    var v = document.getElementById('resposta');
    v.value += val;
 }

function somar(){
    var num1, num2, resp; 
   num1 = parseFloat(document.getElementById("num1").value);
   num2 = parseFloat(document.getElementById("num2").value);

   resp = num1 + num2;
   
   document.getElementById("resp").value = resp;
 }

 function subtrair(){
     var num1, num2, resp;
     num1 = parseFloat(document.getElementById("num1").value);
     num2 = parseFloat(document.getElementById("num2").value);

     resp = num1 - num2;

     document.getElementById("resp").value = resp
 }
 function dividir(){
     var num1, num2, resp;
     num1 = parseFloat(document.getElementById("num1").value);
     num2 = parseFloat(document.getElementById("num2").value);

     resp = num1 / num2;

     document.getElementById("resp").value = resp
 }
 function multiplicar(){
     num1 = parseFloat(document.getElementById("num1").value);
     num2 = parseFloat(document.getElementById("num2").value);

     resp *= val;

     document.getElementById("resposta").value = resp
 }
 function limpar(){
    var inp = document.getElementById('resposta');
    inp.value = '';
 }
 
 function volt() 
 {var ev = document.getElementById('resposta');
 ev.value = ev.value.slice(0,-1);
}