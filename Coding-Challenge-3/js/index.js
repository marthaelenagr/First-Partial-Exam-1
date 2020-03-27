//Variables
let input = document.getElementsByClassName("fizzBuzzNumber");
let result = document.getElementsByClassName("resultsSection");

//Buttons
let submitBtn = document.getElementsByClassName("submitBtn");

submitBtn.addEventListener("click", event => {
    event.preventDefault();
    showResult();
})

function fizzbuzz(){
    if(input%3==0){
        res = "fizz";
    }
    if(input%5==0){
        res = "buzz";
    }
    if(input%3==0 && input%5==0){
        res = "fizzbuzz";
    }
    return res;
}
