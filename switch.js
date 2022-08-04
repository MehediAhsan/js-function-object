var marks=50;
switch(true){
    case (marks>=80):
        console.log("A+");
        break;
    case (marks>=70 && marks<80):
        console.log("A");
        break;
    case (marks>=60 && marks<70):
        console.log("A-");
        break;
    case (marks>=40 && marks<60):
        console.log("B");
        break;
    default:
        console.log("Fail");
}