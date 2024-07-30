const display = document.querySelector('#calcDy');
const opDisplay = document.querySelector('#prevDy')

document.addEventListener('DOMContentLoaded', function () {
document.body.addEventListener('keydown',function(event){
    const key = event.key;
    console.log(key);
    const numberBtn = ['0','1','2','3','4','5','6','7','8','9'];
    if (numberBtn.includes(key)) {
        const button = document.querySelector('#btn' +key);
        if (button){
            button.click()
        }
    }else if (key == 'Enter'){
        event.preventDefault();
        calculate()
    }else if (key == '+'){
        document.querySelector('#btnPlus').click()
    }else if (key == '-'){
        document.querySelector('#btnMinus').click()
    }else if (key == '*'){
        document.querySelector('#btnAsterisk').click()
    }else if (key == '/'){
        document.querySelector('#btnSlash').click()
        event.preventDefault();
    }
})
});

function addToDisplay(input){
    if ((isNaN(display.value.slice(-1))) && (isNaN(input)) || (display.value.slice(-1) == '' && (isNaN(input)))){
        toggleButtonsOff();
    }else{
    display.value += input;
        toggleButtonsOn();
    }
}

function clearDy(){
    display.value = '';
    opDisplay.value = '';
    toggleButtonsOn();
}

const opBtns = ['Plus', 'Minus','Asterisk', 'Slash'];
function toggleButtonsOff(){
    opBtns.forEach(opBtn => {
        document.querySelector('#btn'+opBtn).setAttribute('disabled','')
    });
}

function toggleButtonsOn(){
    opBtns.forEach(opBtn => {
        document.querySelector('#btn'+opBtn).removeAttribute('disabled');
    });
}

function calculate(){
    try{
        opDisplay.value = display.value
        var result = eval(display.value)
        if (isFinite(result)) {
            display.value = result;
        }else{
            display.value = "Error1";
            toggleButtonsOff();
            setTimeout(function() {
                clearDy()
            }, 2000);
            
        }
    }catch(error){
        display.value = 'Error2';
        
    }
}