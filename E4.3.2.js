//Написать функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.
function optFunc(str, obj){
    return str in obj;
  }
  const obj = {
    a:1,
    b:2,
    c:3
  };
  
  let str1 = 'c';
  let str2 = 'e';
  
  console.log(optFunc(str1, obj));
  console.log(optFunc(str2, obj));