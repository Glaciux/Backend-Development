//  A basic script that outputs name, age, and favourite programming language
const user = {
    name: "Etim Iniekung",
    age: 34,
    fav_prog_lang: "Python"
} 

// Using functions
function bio(name, age, fav_prog_lang) {
    return "I'm, " + name + ".\n" + "I'm " + age + " and love the " + fav_prog_lang + " programming language.";
}


console.log("Diving into Backend Development")
console.log("=".repeat(60))
console.log(user)
console.log("=".repeat(60))
console.log(bio("Etim Iniekung", 34, "Python"))
