console.log("write some code here...");
console.log("this is my first typeScript code");
let message: string = 'Hello World';
console.log(message);
function add(n1:number, n2:number,showResult:boolean,phrase:string) {

   /*  console.log(typeof n1);
    if(typeof n1!=='number' || typeof n2!='number'){
        throw new Error('incorrect input');
    } */
    if(showResult){
        console.log(phrase+ n1+n2);
    }
    else{
 console.log(n1 + n2);
 
    }
    
}
var number1=5;
var number2=2.7;

const printResult=true;
const printResultphrase='the result is:'
var result=add(number1,number2,printResult,printResultphrase)
console.log(result);
