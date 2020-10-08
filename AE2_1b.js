var valores = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
 
var arrayPares = valores.filter(function(numero){
    return numero % 2 == 0; 
});
 
console.log(arrayPares);