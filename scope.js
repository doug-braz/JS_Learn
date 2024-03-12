// A Scope in Javascript is what determines where variables can be used/seen. There are three types of scope

// 1) Block scope
// Variables declared as let or const inside curly brackets are locked to the block scope. They can be used within the {} defined block (inside an if clause, for example), but not outside it.

// if (0 == 0){
//     let food = 'Lasagna'
//     console.log(food) // the variable food can be printed onto the screen here (inside de block)
//     food = 'Meatballs' // the variable food can be reassigned within the block
//     console.log(food)
// }
//     console.log(food) // but trying to reference it here, outside the block is going to lead to a Reference Error (check errors.js for more information)


// 2) Function scope
// Variables declared as let or const inside a function can be accessed only within the function

    // function greetMe()
    // {
    //     const greeting = 'Hello there, mate!'
    //     console.log(greeting) 
    // }

    // greetMe() // The variable greeting can be accessed here, using the function
    // console.log(greeting) // But not here, since it is declared within a function scope

// 3) Global scope
// Variables declared outside a function or a block of code are within a global scope. Even declared outside of anything, it can be called upon inside a block or function

// const exponent = 7
// console.log(exponent) // The variable luckyNumber can be accessed outside of a block

// function power(base)
// {
//     console.log(base ** exponent) // the variable can also be accessed inside a function
// }

// power(2)

// IMPORTANT NOTE: variables defined as var are always global, even within blocks or functions!!
