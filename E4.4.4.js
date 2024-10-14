// Конструктор Appliance
function Appliance(inclusion, name, power){
    this.inclusion = inclusion,// Включен или нет
    this.name = name,          // Название прибора 
    this.power = power;        // Мощность прибора
}
  // Метод для вывода мощности
Appliance.prototype.getPower = function(){
    console.log(`Power of ${this.name} is ${this.power} Wt`)
}


  // Конструктор RoomAppliance

function RoomAppliance(inclusion, name, room, power){
    Appliance.call(this, inclusion, name, power); // Наследуем свойства из Appliance
    this.room = room; // Комната, где находится прибор
}
  // Наследуем прототип от Appliance
RoomAppliance.prototype = Object.create(Appliance.prototype);
RoomAppliance.prototype.constructor = RoomAppliance;
  
  // Функция для расчета суммы мощностей включенных приборов
function sum(...appliances){
    let totalPower = 0;
    for (let appliance of appliances) {
        if (appliance.inclusion) {
          totalPower += appliance.power;
        }
      }
    
    if (totalPower === 0) {
        console.log('Включите приборы');
    } else {
        console.log(`Суммарная мощность включенных приборов: ${totalPower} Wt`);
    }
}
  
  // Создаем объекты RoomAppliance
const table_lamp = new RoomAppliance(false, 'table_lamp', 'cabinet', 20);
table_lamp.getPower();
  
const computer = new RoomAppliance(true, 'computer', 'cabinet', 50);
computer.getPower();
  
const fridge = new RoomAppliance(true, 'fridge', 'kitchen', 100);
fridge.getPower();

// Рассчитываем сумму мощностей включенных приборов
sum(table_lamp, computer, fridge);

  // Вывод информации о приборах
console.log(table_lamp);
console.log(computer);
console.log(fridge);


