function add(num1,num2){
    const sum=num1+num2;
    return sum;
}
const result1=add(5,3);
const result2=add(6,4);
const finalResult=add(result1,result2); //here the interesting thing that's why we use function return so that we use the return value more and more
console.log(result1,result2);
console.log("Final Result is:",finalResult);
