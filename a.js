const name = "Timmz";
const age = 34;

console.log("Hello,", name); 

// functions in JS
function greet(name) {
    return "Yo, " + name + "!";
}
const griet = (name) => "Hey, " + name;

const bio = (name, age, job) => "I'm " + name + ". " + "\nI'm " + age + " and work as a " + job;

console.log(bio("Westpawz", 35, "CEO/Analyst"))
console.log(greet("Westpawz"))
console.log(griet("Westpawz"))

export {}