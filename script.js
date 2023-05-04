/* let input = document.getElementById("input");
let button = document.getElementById("button");
let ul = document.querySelector("ul");
let elements = document.getElementsById("element");
let li = document.querySelector("li");
let deleteBtn = document.getElementsById("delete");

for(let i = 0; i < deleteBtn.length; i++){
	deleteBtn[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
  }

  //click on a list item and it strikethroughs the text
function lineThrough(event){
	var a=event.target;
	
	if(count==0)
	{
		
	    a.classList.add("done");
	}
	else
	{
		a.classList.toggle("done");
	}
	count++;


}


function inputValue(){
    return input.value.length;
}

function createNewList(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function onClick(){
    if(inputValue() > 0){
        createNewList();
    } 
}

function keyEnter(e){
    if(inputValue() > 0 && e.keyCode === 13){
        createNewList();
    } 
}


button.addEventListener("click", onClick);
input.addEventListener("keypress", keyEnter);


function user(bool){
    return bool;
}
let answer =  "Do you love me? " + (user(false) ? "Yes" : "No");


function moveCommand(direction){
    let whatHappens;
    switch(direction){
        case "forward":
            whatHappens = "You encounter a Dinosaur";
        break;

        case "back":
            whatHappens = "You arrived Home";
        break;

        case "right":
            whatHappens = "You found the bacteria";
        break;

        case "forward":
            whatHappens = "Big Bang Theory yarn";
        break;

        default:
            whatHappens = "What a LOGIC"
    }
    return whatHappens;
}



const User = "Aiah";
let experience = 110;
let wizardLevel = false;

if(experience > 90) {
    let wizardLevel = true;
}



const name = "Aiah";
const age = 23;
const pet = "Dog";

const greeting = `Hello ${name} you seem to be young because you are only ${age} and your pet is a ${pet}`;

function greet(
    name = "Aiah",
    age = 23,
    pet = "Dog"){
        return `Hello ${name} you seem to be young because you are only ${age} and your pet is a ${pet}`;
    }

const add = (a, b) => a + b;



// Advance function

const first = () => {
    const greet = "Hello";
    const second = () => {
        alert(greet)
    }
    return second;
}

const newFunc = first ();
newFunc();

//Closures - a function ran. the function executed. It's never going to execute again 
// but it's going to remember that there are references to those variables.
// so the child scope always has access to the parents scope

//Currying  - process of converting a function that takes multiple arguments into a function that takes them one at a time
const multiply = (a, b)  => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (sum) => num +1;

compose(sum, sum)(5);

//avoiding side effects, functional purity means determinism
const a = 1;
function b(){
    a = 2;
}

*/

// Advance Array
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

/* const newArray = array.forEach(num => {
    double.push(num * 2);
}); */

console.log(double);

// map, filter, reduce
//1. Map
const mapArray = array.map((num) => {
    return num * 2;
})

console.log(mapArray);
// const mapArray = array.map(num => num * 2);

//2. Filter
const filterArray = array.filter((num) => {
    return num > 2;
})
console.log(filterArray);

// const filterArray = array.filter(num => num > 5);

//3. Reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5); // (5) + (1 + 2 + 10 + 16) = 34
