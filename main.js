// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
function isLeapYear(year) { 
    return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0); 
    }
console.log("2000:"+ isLeapYear(2000));
console.log("1900:"+ isLeapYear(1900));
console.log("2008:"+ isLeapYear(2008));
console.log("2009:"+isLeapYear(2009));

function FBNQ(num) { 
    var f=2; 
    var y=1;
    var x=1;
    if (num<=2){
        return 1;
    }
    if(num>2){
        console.log(x);
        console.log(y);
        for(i=num;i>=2;i--){
            x=f;      
            f=f+y;
            y=x;  
            console.log(f);
        }
        
    }
   
 }

  n = 5;
console.log(FBNQ(n-2));