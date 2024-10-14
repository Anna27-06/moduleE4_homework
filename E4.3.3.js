//Написать функцию, которая создает пустой объект, но без прототипа.
function newObject() {
    let obj = Object.create(null);
    return obj;
}

console.log(newObject())