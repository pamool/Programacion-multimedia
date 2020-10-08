//conjunto de datos
//funcion para comparar
//(valor1,valor2)=> valor1 -valor2) esto es para mostrar el minimo en la funcion
//>=0 ? valor2 : valor1 en esta parte del codigo si el valor es mayor = 0 se devuelve y si no, devuelve x
var values = [15,23,5,84,100];
 
function findMinimum(valores, funcionComparar=(valor1,valor2)=> valor1 -valor2){
    return valores.reduce((valor1,valor2) => (funcionComparar(valor1,valor2) >=0 ? valor2 : valor1));
}
 
console.log(findMinimum(values));