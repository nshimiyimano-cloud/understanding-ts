const names:Array<string>=[]; //this is gener to define type of values will be store in our array while normally is like eg names:string[]=[....]

// other generic type is promise


const promise:Promise<string>=new Promise((resolve,rejected)=>{//you can say <number...>
    setTimeout(()=>{
        resolve('this is done') //if value type is number here must resolve numbe as will be returned
    },3000);
});
promise.then((data)=>{ //if type is number and you hover on (data) param you see hass type of number but now is string
    console.log(data);
})


//to create our own generic function
//eg function to combine or to merge two object

function merge<T extends object,U extends object >(objA:T,objB:U){//if we hover on our funct ts show us intersection on T and U as return 'function merge<T, U>(objA: T, objB: U): T & U'         //insted of say (obA:object,objB:object) we equalize with its identifier help ts to know our all properties we'll store in our merged object
//on constraint to restrict only like object allowed as exstend onject if you pass real value eg merge({name:''},20) on that 20 tsc throw ''Argument of type 'number' is not assignable to parameter of type 'object'.
//if no constraits ts not see error and at runtime js not see runtime error only you name property without age with 30
return Object.assign(objA,objB);
}
//console.log(merge({name:'nshimiyimana'},{age:30}));

//if no additional as genericT&U if we try to get any property seem unknown by TS not be accessed generic solve problem like that
const mergedObject=merge({name:'nshimiyimana'},{age:50}); //if we hover on mergedObject constant we see all properties known by TS because gen funct
console.log(mergedObject,mergedObject.age);//.name&.age automatically seen

/* const mergedObject: {
    name: string;
} & {                       if you hover on mergedObject this this just as &(means intersection of 2objects)
    age: number;
} */



//OTHER GENERIC TYPE function


//we see element.length ts become complained becouse does not clear that element has length we make it clear or solve by create interface like custom type like below:

 interface Lengthy{
    length:number;
} 

function countAndDescribe<T extends Lengthy>(element:T):[T,string]/* to show valuetype returned in tuple */{      //hre we have one gen type as for one parameter'element'

let descriptionText='got no value';

if(element.length ===1){
    descriptionText='got 1 element';
}
else if(element.length>1){
    descriptionText='got'+element.length+' element';
}


return [element,descriptionText];  //should return tuple of 2 el
}
console.log(countAndDescribe(['sport','cooking']));


//KEYOF CONSTRAIT

function extractAndConvert<T extends object,U extends keyof T >(obj:T,key:U){ // function extractAndConvert(obj:object,key:string){   if no keyOf ts will throw 'Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.  No index signature with a parameter of type 'string' was found on type '{}'.'
    return 'value:  '+obj[key];
}
console.log(extractAndConvert({'name':'nshimiyimana'},'name')); //if eg 2nd arg=age ts will throw ' Argument of type '"age"' is not assignable to parameter of type '"name"'.   69 extractAndConvert({name:'nshimiyimana'},'age'); key all must be the same
                                           