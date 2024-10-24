var inr = document.getElementById('inr');
var usd = document.getElementById('usd');
function convertCurrency(){
    // inr.value = usd.value * 84.03;
    usd.value = (inr.value / 84.03).toFixed(2);
}
function clearButton(){
    inr.value = NaN;
    usd.value = NaN;
}