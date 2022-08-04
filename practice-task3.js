/* 

Challenging: Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values. 

*/


function make_avg(arr,size){
    var sum=0;
    for(var i=0; i<size; i++){
        sum+=arr[i];
    }
    return (sum/size);
}


var arr=[4,5,7];
var size=arr.length;

var average= make_avg(arr,size);
console.log(average.toFixed(2));