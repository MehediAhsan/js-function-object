/* 

Write a function called make_avg() which will take an three integers and return the
average of those values.

*/


function make_avg(a,b,c){
    avg=(a+b+c)/3;
    return avg;
}

var average = make_avg(4,5,7);

console.log(average.toFixed(2));