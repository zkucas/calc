let operator = ['+','-','/','*'];
let displayValue = '';
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btx');
const container = document.querySelector('.container');

display.textContent = displayValue;


/*basic calculator operations*/

function add(numbers){
    let result = 0;
    for(let i=0; i < numbers.length; i++){
        result+=numbers[i]
    }
    return result
}

function subtract(numbers){
    let result = numbers.reduce((a,b) => a-b);
    return result
}

function multiply(numbers){
    let result = 1;
    for(let i=0; i < numbers.length; i++){
        result*=numbers[i]
    }
    return result
}

function divide(numbers){
    let result = numbers.reduce((a,b) => a/b);
    return result
}

/*update display*/


container.addEventListener("click", event => {
    displayValue+= event.target.textContent.replace(/\D/g, "");
    displayValue = (event.target.textContent=='C') ? '' : displayValue;
    display.textContent = displayValue;
    return displayValue
    
})

let firstVal ='';
let secVal = '';

container.addEventListener("click", event => {

    if( event.target.textContent=='+'){
        firstVal = displayValue;
        displayValue = '';
    }else if (event.target.textContent=='='){
        secVal = displayValue;
        displayValue = add([Number(secVal), Number(firstVal)]);
        display.textContent = displayValue; 
    }
})



container.addEventListener("mouseover", event => {
    event.target.style.opacity = "0.7";
})

container.addEventListener("mouseout", event => {
    event.target.style.opacity = "1";
})









console.log(divide([10,5,3]));