/*let flower = {
    name: "daisy",
    height: 5, 
    color: "pink"
}
flower.color = "blue"
flower['height'] = 10
flower['pollinators'] = ["bees", "butterfly", "worms"]
flower['pollinators'].push("human")


flower.grow = function grow(){
    return flower.height + 5
}

console.log(flower)
*/

//creat constructor
function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city
}
Person.prototype.multiplyAge = function (){
    return this.age * 2
}

let user1 = new Person('Michelle', 150, "Nairobi")
let user2 = new Person("Morris", 120, "Kisumu")


user1.dogAge = function(){
    console.log (user1.age / 7)
}

console.log(user1)
