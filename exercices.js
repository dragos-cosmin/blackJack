let messages=[
    "Hey, how is it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portofolio lately."
]

let newMessage="Same here!"

messages.push(newMessage)

messages.forEach(element => {
    console.log(element)
});

console.log(messages)

messages.pop()

console.log(messages)

array=[1,5,6,7,9]
for (let count = 0; count < array.length; count++) {
    const element = array[count];
    console.log(element)
    
}

for (let i = 10; i <= 100; i+=10) {
    console.log(i)
    
}

let sentence=["Hello","my","name","is","Dragos"]
let greetingEl=document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    greetingEl.textContent+=element+" "
    
}

let randomNumber=Math.random()*6+1

let flooredNumber=Math.floor(randomNumber)

console.log(flooredNumber)

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

let castle = {
    title: "Dracula Castel",
    isAvailable: true,
    pricePerNight: 250,
    reviews: ["horror", "halloween"],
    images: ["img/castle1.png", "img/castle2.png"]

}

console.log(castle.title)
console.log(castle.pricePerNight)

let person = {
    name: "Dragos",
    age: 53,
    country: "Romania"
}

function logData(){
    return person.name+" is "+person.age+" old and lives in "+person.country
}

console.log(logData())

let age=67

if (age<6){
    console.log("free")
} else if (age<18){
    console.log("child discount")
} else if (age<27) {
    console.log("student discount")
} else if (age<67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

let countries=["Tuvalu","India","USA","Indonesia","Monaco"]

countries.pop()

console.log(countries)

countries.push("Pakistan")

console.log(countries)

countries.shift()

console.log(countries)

countries.unshift("China")

console.log(countries)

let hands=["rock","paper","scissor"]

console.log(hands[Math.floor(Math.random()*3)])
