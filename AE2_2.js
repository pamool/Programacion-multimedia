let dataArray = [2, 8, 3, 4];
let array = [];

function average (dataArray) {

    if (dataArray.length){
        let sum = 0;
        return dataArray.reduce((sum, item) => item + sum, 0)/dataArray.length;
    }else{
        return undefined;
    }       
}

console.log(average(dataArray));