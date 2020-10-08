var values =[1,2,3,4,5,6,7];
 
var multipleFactorial = values.map(function(valor) {
    var total = 1; 
             for (let i=1; i<=valor; i++) {
                total = total * i; 
    }
        return total; 
 
    }
    
    );
 
console.log(multipleFactorial);