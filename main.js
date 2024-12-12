let text = '';
let param1 = '';
let param2 = '';
let operator = '';
const input = document.querySelector('div.input');
const btn1 = document.querySelector('button.btn1');
const buttons = document.querySelectorAll('button.color');
btn1.addEventListener('click', () => {
    text = text + 1;
    input.innerText +=1;
})
const btn2 = document.querySelector('button.btn2');
btn2.addEventListener('click', () => {
    text = text + 2;
    input.innerText +=2;
})
const btn3 = document.querySelector('button.btn3');
btn3.addEventListener('click', () => {
    text = text + 3;
    input.innerText +=3;
})
const btn4 = document.querySelector('button.btn4');
btn4.addEventListener('click', () => {
    param1 = Number(text);
    operator = '+';
    input.innerText = param1 +''+ operator;
    text = '';
})
const btn5 = document.querySelector('button.btn5');
btn5.addEventListener('click', () => {
    text = text + 4;
    input.innerText +=4;
})
const btn6 = document.querySelector('button.btn6');
btn6.addEventListener('click', () => {
    text = text + 5;
    input.innerText +=5;
})
const btn7 = document.querySelector('button.btn7');
btn7.addEventListener('click', () => {
    text = text + 6;
    input.innerText +=6;
})
const btn8 = document.querySelector('button.btn8');
btn8.addEventListener('click', () => {
    param1 = Number(text);
    operator = '-';
    input.innerText = param1 +''+ operator;
    text = '';
})
const btn9 = document.querySelector('button.btn9');
btn9.addEventListener('click', () => {
    text = text + 7;
    input.innerText +=7;
})
const btn10 = document.querySelector('button.btn10');
btn10.addEventListener('click', () => {
    text = text + 8;
    input.innerText +=8;
})
const btn11 = document.querySelector('button.btn11');
btn11.addEventListener('click', () => {
    text = text + 9;
    input.innerText +=9;
})
const btn12 = document.querySelector('button.btn12');
btn12.addEventListener('click', () => {
    param1 = Number(text);
    operator = '*';
    input.innerText = param1 +''+ operator;
    text = '';
    
})
const btn13 = document.querySelector('button.btn13');
btn13.addEventListener('click', () => {
   text = '';
   param1 = '';
   param2 = '';
   input.innerText = '';
})
const btn14 = document.querySelector('button.btn14');
btn14.addEventListener('click', () => {
    text = text + 0;
    input.innerText += 0;
})
const btn15 = document.querySelector('button.btn15');
btn15.addEventListener('click', () => {
    text = text + ".";
    input.innerText += '.';
   
})
const btn16 = document.querySelector('button.btn16');
btn16.addEventListener('click', () => {
    param2 = Number(text);
    let result;
    if (operator === '+') {
        result = Number(param1) + Number(param2);  
    } else if (operator === '-') {
        result = param1 - param2; 
    } else if (operator === '*') {
        result = param1 * param2;  
    } else {
        result = 'Mistake';  // 
    }

    input.innerText = result;

    param1 = result; 
    param2 = '';  
    operator = '';  
    text = '';  
});

