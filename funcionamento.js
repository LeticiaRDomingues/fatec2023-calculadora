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
     var num1, num2, resp;
     num1 = parseFloat(document.getElementById("num1").value);
     num2 = parseFloat(document.getElementById("num2").value);

     resp = num1 * num2;

     document.getElementById("resp").value = resp
 }
 function limpar(){
    var num1, num2, resp;
    document.getElementById('num1').value=''; 
    document.getElementById('num2').value=''; 
    document.getElementById('resp').value=''; 
 }