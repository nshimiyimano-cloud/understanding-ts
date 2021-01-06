


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

//class constructor and this keyword






class Department{
   public name:string='default'; //if this property is public you can make modification out side of department class
    private employees:string[]=[];

    constructor(n:string){
    this.name=n;
    }
    //logic to add employee
    addEmployee(employee:string){
        this.employees.push(employee);
    }

    //logic that will make display all info about employee
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }

    //we can make function or method in this class
    
    describe(this:Department){
        console.log('Department:'+this.name); //here if we use only name we can not access this name property except global variable but this name becouse is inside class we use this
    }


}

//object instatiate to class
const accounting=new Department('accounting');
console.log(accounting);
//department.describe();

//after instatiating object we can cal our method to add emploee
accounting.addEmployee("hakuzimana Aloyz");
accounting.addEmployee("nshimiyimana jean luc");

//and we use or call our function or method we have been make to display employees

accounting.printEmployeeInformation();

//becouse is public no secret here we can add add or change employee outside


//accounting.employees[3]="habumugisha"; //here if our employees has private we get err becouse if private you are not able to access and to add or change to employees out side the class


/* 


//this keyword is tricky for example is do like this no compiler error but yiu get undefined in console

                       //to fix err problem here we add name to ts to see name property  
const accountinCopy={name:'dummy name in dummy object',describe:department.describe}; //here we get undefined if we don't have name here not besed on Department class becouse this is dummy object is does not have any instance from class
accountinCopy.describe(); //but if we have name in this accountinCopy object no error but if no name ts search in department class but not possible becouse this param has type of Department means not to exceed limit of Depar class */