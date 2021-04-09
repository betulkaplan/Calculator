const display_bottom = document.querySelector('.bottom');
const display_top = document.querySelector('.top');
let keys = document.querySelectorAll('.xkey');
const delete_line = document.getElementById('deleteline');

let result = 0;

function pressKey(key){
    if((key >= '0') && key<='9'){
        display_bottom.textContent += key;
    }
    if(key == 'AC'){
        display_bottom.textContent = '';
        display_top.textContent = '';
    }
    let operators = '+-*/'
    let operator = '';
    if(operators.indexOf(key) !== -1){
        console.log('this is operator')
        operator = key;
        let value = parseFloat(display_bottom.textContent);
        if(operator === '+') result += value;
        if(operator === '-') result -= value;
        if(operator === '*') result *= value;
        if(operator === '/') result /= value;
        display_top.textContent += value + operator;
        display_bottom.textContent = '';
    }
    if(key === "="){
        console.log('your press equal')
        display_top.textContent += display_bottom.textContent;
        display_bottom.textContent = eval(display_top.textContent);
    }
    
}
for(let i = 0; i < keys.length; i++)
{
    keys[i].addEventListener('click', function(event){
        pressKey(event.currentTarget.textContent)
        event.cancelBubble = true;
    })
}




//console.log(keys)