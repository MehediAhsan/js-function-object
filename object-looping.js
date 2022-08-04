let shop = {
    chips:12,
    drinks:30,
    cake:20,
    pen:15,
    fruits:25
}
console.log(shop)

var keys=Object.keys(shop);
console.log(keys);
var values=Object.values(shop);
console.log(values);

console.log("\n");

for(var i=0; i<keys.length; i++){
    var propertyName= keys[i];
    var propertyValue=shop[propertyName];
    console.log("Total",propertyName,"=",propertyValue);
}

// for in loop
console.log("\n");

for(var property in shop){
    const value=shop[property];
    console.log(property,value);
}
