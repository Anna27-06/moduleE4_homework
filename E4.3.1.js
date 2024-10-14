//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
//и значения только собственных свойств. Данная функция не должна возвращать значение.
function student(object){
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
          console.log(key, object[key]); 
      }   
    }
    return Object.keys(object);
  }
  const obj1 = {
    age: 20,
    name: 'Anna',
    city: 'Moscow' 
  }
  
  const some_student = student(obj1)
  
  consile.log(some_student)