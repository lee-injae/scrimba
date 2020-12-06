var number = 10

var box1 = 1.342
var box2 = 2.038

var combinedHeight = box1 + box2
var truckHeight = 3.5

console.log(truckHeight - combinedHeight)

/////////////////////
//primitive data type
/////////////////////


// strings
var name = "joe"

// numbers
var age = 20

// booleans
// true or false

var isOldEnoughToDrive = true

var username = "ocean"
var password = 456
var isSubcribed = true

console.log(password)

///////////////////
//complex data type 
///////////////////

// arrays - list of ordered items

var pets = ["dog", "cat", "bird"]

var mark = "Mark"
var larry= "Larry"
var joe = "Joe"

var friendList = [mark, larry, joe]

console.log(friendList[0])
console.log(friendList[1])
console.log(friendList[2])

/////////////////////////
// complex data type
///////////////////////

// objects

 // describe a piece of data in depth

// key: value pairs
 var dog = {
    name: "spot",
    age: 4,
    isHungry: true,
    favToys: ["bone", "ball", "stuffed animal"]

 }

 //dot notation
 console.log(dog.isHungry)

 //bracket notation
console.log(dog["age"])

var person = {
    name: "Larry",
    age: 20,
    freinds: ["John", "Lisa", "Al"],
    isPetOwner: true,
    greeting: "Hello friend",
    sayGreeting: function(){
        console.log(this.greeting)
        
    }
}

console.log(person)

// Function and Methods
    // Function: a type of data that allws us to execute specific code when/as needed
    // Method: a function that is a property of an object

person.sayGreeting()

// this keyword inside of an object refers to itself


var object ={
    key: "value",
     
}

var myComputer ={
    name: "macbook pro",
    year: 2020,
    color: "space gray",
    users: ["injae", "ocean"],
    counter: 0,
    increment: function(){
        this.counter += 1
        console.log(this.counter)
    },
    hasBeenBroken: false
}

console.log(myComputer)
console.log(myComputer["users"])
console.log(myComputer.counter)
myComputer.increment()
console.log(myComputer.counter)
myComputer.increment()
console.log(myComputer.counter)
console.log(myComputer.hasBeenBroken)