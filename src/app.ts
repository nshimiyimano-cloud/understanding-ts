


/* const button=document.querySelector('button')!;

//about strictBindCallApply option eg

function clickHandler(message:string){
    console.log("button clicked now");
}




if(button){
button.addEventListener("click",clickHandler.bind(null,"hello"));//if bind(null) will be error becouse no other org for message parameter so this is on("strictBindCallApply": true)

} */

//next generation typescript & js(let var const)

/* let age=30; not allowed best is to write clear code if let is let if var use var if const use it
age=28;

if(age>28){
    var isOld=true;
}
console.log(isOld); */


//arrow function eg

var addNums=(a:number,b:number)=>{
    return a+b;
}
console.log(addNums(3,7));


//and with arrow function you can make tio shorter syntax eg

var addNums=(a:number,b:number)=>a+b;
console.log(addNums(32,3));

//and you can provide output function like this

var printOutput=(output:number | string)=>console.log(output);
printOutput(addNums(56,5));

// or write like below


var printOutput:(a:number | string)=>void=output=>console.log(output); //how is how you can make type assignment on arrow function 
printOutput('my new arrow in modern vanila js  with ts');//even you call addNums()


const button2=document.querySelector("button");

if(button2){
    //we can use pair of parathesis as ananymouse funct
  /*   button2.addEventListener('click',()=>{ 
        console.log('button clicked here in modern vanila js code');
    }) */
//or in shorter syntax with getting event object

    button2.addEventListener('click',event=>console.log(event)); //automaticall this param taken as mouseEvent object will understood immediately (in chrome console you will get all about event object)
}


//on spread operator
const hobbies=['cooking','sport'];
const activeHobbies=['hiking'];
//activeHobbies.push(hobbies); //if you make this tell you type 'string[]' is not assingable to type 'string' it need to take one by one(single value)
//s=>//activeHobbies.push(hobbies[0]);
activeHobbies.push(/*hobbies[1],hobbies[0]*/); //this work see bellow how to push all array elements done with spread ... arrayname or object name

activeHobbies.push(... hobbies);
console.log(activeHobbies);

//on object


var person={firstName:"nshiumiyimana",lastName:"jeanluc"};

var otherCopiedPerson={location:"gatsibo",isMarried:true};
var copiedPerson={...otherCopiedPerson,...person};

console.log(copiedPerson);

//rest operator


const addValues=(...nums:any[])=>{
// sum these params for args will passed on calling this finction we can use for loop or reduce which is available on arrays

return nums.reduce((curResult,curValue)=>{
    return curResult+curValue;
},0)

}
console.log(addValues(23,4,5,6,7,8,9,10,'hello','jimi'));

//array and object distructuring

//then we based on hobbies
const hobby1=hobbies[0];//to get el1 this is normal way and below is new way where we get pullout or distructure more than one at the same
const [hoby1,hobby2,...remainingHobbies]=hobbies;
console.log(hobbies,hoby1,hobby2);

//then go on person object
const {firstName,lastName}=person;//this is to get property values of person or distructuring
const {firstName:myNames,lastName:myLastname}=person; //this is how we can renaming keys or properties of object
console.log(myNames,myLastname);

