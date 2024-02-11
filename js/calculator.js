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
    display.value += input;
}

function clearDy(){
    display.value = '';
    opDisplay.value = '';
}

function calculate(){
    try{
        opDisplay.value = display.value
        display.value = eval(display.value)
    }catch(error){
        display.value = 'Error';
    }
}