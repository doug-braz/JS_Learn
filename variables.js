// Variables must be declared in Javascript
// JS is a weakly/dynamic typed language, which means that it automatically understands the type of a variable, without the need to specify the variable type

// There are three types of variable declaration in Javascript: let, const and var

// let and var allows value changes during execution, while const cannot be reassigned

// all line codes must have a semicolon at the end

let student = 'Douglas';
// a variable called student was created, and the value 'Douglas' was assigned to it. The variable type was automatically set to a string due to the quotation marks around the value

console.log('First variable value: ', student); // Prints the value of student

// As a let type, this variable can be reassigned

student = 'John';

console.log('Second variable value: ', student);

const teacher = 'Abby'; // now a variable called teacher was created, and the value 'Abby' was assigned to it. This variable was declared using const, meaning it cannot be changed in the future

console.log(teacher)

// if we try to change teacher, it is going to lead to a type error

// it is a good practice in Javascript to lock constant variables from edit.

// ########### VARIABLE TYPES ################

// In JS, there are three main data types: string, number and boolean.

// The string type depicts a piece of text. A string type value will always be declared within quotation marks ('') or double quotation marks ("")

// const phrase1 = 'this is a string'

// const phrase2 = "this is also a string"

// console.log(typeof(phrase1))
// console.log(typeof(phrase2))

// The function typeof(value or variable) returns the data type of the given parameter

// Both '' and "" can be used to assign a string due to the fact that sometimes we do need to add one of this symbols within a string.

// If you need a string value that contains the symbol ', you need to declare it within "", and vice versa

// console.log("I've done my homework.")

// console.log('And then he said: "I will not be here then"')

// Another way to include a ' or a " within a string is to use a backslash (\) before it

// console.log('I\'m not playing that game')

// If the backslash (\) needs to be in a string value, it needs to be used twice (\\)


// ############# NUMBER TYPE #################

// Both integers and real numbers are stored in the same data type that is Number

const wage = 4000.50
const working_hours = 8

console.log(typeof(wage))
console.log(typeof(working_hours))

// The number data type can be operated with arithmetic methods (addition, subtraction, multiplication, division...)

// For example, we can evaluate the mean value of three values

const grade1 = 8.5
const grade2 = 9.7
const grade3 = 9.9

const mean = (grade1 + grade2 + grade3)/3

console.log(mean)

// As we can see, the number printed here shows lots of decimal digits. We can use the .toFixed(number_of_digits) function to reduce the number of digital digits

console.log(mean.toFixed(2))

