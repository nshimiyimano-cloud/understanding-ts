//typescr about function
function add(n1:number,n2:number):number{//if here is number means it return number as result but if here is a string but result is from calculation not concatunation ts throws error that string not assingable as number becouse it calculate as number but it see string
   /* if you put here n2.toString()+n2.tostr ts it understand string as result becouse will concatenate */ return n1+n2;  //if above nothing(no type specified to return but on all inputs or parameter is number ts it assigns number as result if all params is string ts it assigns string as result)
}
// cathilanghansn45@hotmail.com ya Francois Mudaheranwa   on fb

// Keza Soso Solange tailofrgirl


function printResult(num:number):void{ //even no add void ts it addon by default becouse is its job
    console.log('result:'+num);
}

printResult(add(15,2));


//in js if we consolo.log(void function after it return undefined)eg
console.log(printResult(add(15,2)));
/* ypically, you use the void type as the return type of functions that do not return a value. For example:

function log(message): void {
    console.log(messsage);
} */

let combineValues:(a:number,b:number)=>number;  //to tell typescript param type& return value type  that means return result not be perfect becouse its params exceeds 2
combineValues=add;  //how is done to store function pointer to combineValues

//if here we assign no 5 tss throws an error because 5 take it as number but here is combined values from function add() eg
//combineValues=5; //ncaught TypeError: combineValues is not a function



console.log(combineValues(90,9));  //here it work becouse it point on that add function

 combineValues=printResult;  //here they tell 'Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.Type 'void' is not assignable to type 'number'.'
