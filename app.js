let principal;
let rate;
let time;
let btn = document.querySelector("#btn");
let result= document.querySelector("#result");
let sum;
let interest;
let rate1;



function multiply(principal, rate, time) {
    principal = parseInt(document.getElementById("loan-amt").value);
    rate = parseFloat(document.getElementById("rate").value);
    time = parseFloat(document.getElementById("time").value);

    //rate1 = rate /100;

   sum = (principal * rate * time);

   interest = sum / 100;

    result.value = `The interest on loan is ${interest} `;
    console.log(interest)
}

btn.addEventListener("click", multiply());


