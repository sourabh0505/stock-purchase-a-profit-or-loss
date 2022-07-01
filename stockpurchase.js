const initialprice = document.querySelector("#initial-price");
const quantityofstocks = document.querySelector("#Quantity-of-stocks");
const currentprice = document.querySelector("#current-price");
const outputmessage = document.querySelector("#output-message");
const tellmebutton = document.querySelector("#tell-me");

tellmebutton.addEventListener('click', submithandler);

function submithandler(){
    const ip = initialprice.value;
    const qty = quantityofstocks.value;
    const curr = currentprice.value;

    calculateProfitandLoss(ip, qty, curr);
}

function calculateProfitandLoss(initial, quantity, current) {
    if (current > initial) {
        var profit = (current - initial)*quantity;
        var profitpercentage = (profit/initial)*100;

        showOutput(`The profit is ${profit} and the profit percentage is ${profitpercentage}%.`)
    }
    else if(current < initial){
        var loss = (initial - current)*quantity;
        var losspercentage = (loss/initial)*100; 

        showOutput(`The loss is ${loss} and the loss percentage is ${losspercentage}%.`)
        
    }
    else{
        showOutput("No pain no gain!");
    }
}

document.getElementById(submithandler);

function showOutput(message){
    outputmessage.innerHTML = message;
}