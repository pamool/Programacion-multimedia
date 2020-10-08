const users = ["Pepe","Juan","Pau","Antonio"];
const blackList = ["Pau","Juan"];

let arrayFinal = [];
users.map((users) => {
    blackList.map((blackList) => {
        if(users == blackList){
            arrayFinal.push(users);
        }
    });
});

console.log(arrayFinal);