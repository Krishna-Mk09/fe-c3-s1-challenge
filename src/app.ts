//Declare global container constant to represent <div> container

//Define Fruit Object type with required properties
class Fruit{
    private name:string
    private type:string
    private colour:string

    constructor(name:string,type:string,colour:string){
            this.name = name;
            this.type = type;
            this.colour = colour;
    }
}

//Fetch data from server using getFruits() method 
  function getFruits(){
    let fruits:any = document.querySelector("#FF") 
    let fruitData :any = new FormData(fruits)
    let data = new Fruit(fruitData.get("name"),fruitData.get("type"),fruitData.get("color"))
    sendData(data);
 }
  function sendData(data1:Fruit){
    fetch("http://localhost:3000/profile " ,{
    method:"post",
    body:JSON.stringify(data1),
    headers:{
        "content-type":"application/json;charset=UTF-8"
    }})
}
//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 


//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container


//Call getFruits() method globally
