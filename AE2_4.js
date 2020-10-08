const findGreaterThan = (num, values)=> {
    let verdadero = true;
    values.reduce((acumulador, item) => item < num ? verdadero = false : null);
    return verdadero;
}

console.log(findGreaterThan(8, [2, 5, 9, 1, 3]));