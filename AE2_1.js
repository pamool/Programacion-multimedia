var valores = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
 
var arrayNombre = valores.filter(function(value){
    return typeof value === "string"; 
});
 
console.log(arrayNombre);