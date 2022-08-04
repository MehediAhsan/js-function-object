/*

Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter 

*/


//Has return + Has parameter


function odd_even(n){
    if(n%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

var check = odd_even(199);
console.log(check);



//No return + Has parameter 


function even_odd(n){
    if(n%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

even_odd(10);