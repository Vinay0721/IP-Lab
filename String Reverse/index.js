var mainDisplay = document.getElementById('mainDisplay');
var subDisplay = document.getElementById('subDisplay');

function reverseStr() {
    if (mainDisplay.value.length > 0) {
        subDisplay.value = mainDisplay.value.split('').reverse().join('');
    } else {
        subDisplay.value = '';
    }
}
