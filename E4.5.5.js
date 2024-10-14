//Класс Appliance
class Appliance{
    constructor(inclusion, name, power){
      this.inclusion = inclusion;
      this.name = name;
      this.power = power;    
    }
    getPower(){
      return console.log(`Power of ${this.name} is ${this.power} Wt`)
    }
    static sum(...appliances){
      let totalPower = 0;
      for (let appliance of appliances) {
          if (appliance.inclusion) {
            totalPower += appliance.power;
          }
        }    
      if (totalPower === 0) {
          console.log(`Включите приборы`);
      } else {
          console.log(`Суммарная мощность включенных приборов: ${totalPower} Wt`);
      }
    }
  }
  
  class RoomAppliance extends Appliance{
    constructor(inclusion, name, room, power){
      super(inclusion, name, power);
      this.room = room;    
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
  Appliance.sum(table_lamp, computer, fridge);
  
    // Вывод информации о приборах
  console.log(table_lamp);
  console.log(computer);
  console.log(fridge);