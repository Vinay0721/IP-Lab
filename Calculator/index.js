var mainDisplay = document.getElementById('mainDisplay');
var subDisplay = document.getElementById('subDisplay');

mainDisplay.value = '0';

function getValue(val){
    if(mainDisplay.value != 0){
        mainDisplay.value += val;
    }
    else{
        mainDisplay.value = val;
    }
}
function clearDisplay(){
    mainDisplay.value = '0';
    subDisplay.value = '';
}

function findAns(){
    var equation = mainDisplay.value;
    var solution = eval(equation);
    subDisplay.value = equation + " = ";
    mainDisplay.value = solution; 
}

function backspace(){
    if(mainDisplay.value.length > 1){
        mainDisplay.value = mainDisplay.value.slice(0, -1);
    }
    else{
        mainDisplay.value = '0';
    }
}