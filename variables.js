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
