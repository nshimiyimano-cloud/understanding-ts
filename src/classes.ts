


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



//to create proprty and initialise both in constructor done only in ts not in js


 abstract class Department{

    static fiscalYear=2020;
    /* private id:string;  then we define both in constructor
    public name:string='default'; //if this property is public you can make modification out side of department class */
   /* private*/protected employees:string[]=[];   //then we make it protected to ba able accessible in derived class if private not possible in its child class

    constructor(protected readonly id:string,public name:string){
    //this.id=id;
    //this.name=name;
    }
    
    //logic to add employee
    addEmployee(employee:string){
        //this.id='id2' //if we do this we told 'annot assign to 'id' because it is a read-only property.ts(2540)'
        this.employees.push(employee);
    }

    //logic that will make display all info about employee
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }


    //we can make function or method in this class
    
  abstract describe(this:Department):void;   //{    //we choose this to used as abstract method to be able shared in other derived classes
       // console.log(`Department:${this.id}   ${this.name}`); //here if we use only name we can not access this name property except global variable but this name becouse is inside class we use this
  // }

    //we want to create employee with static method that will directly accessed by class itself

  static createEmployee(name:string){
        return {name:name};
    }


}
//static method
const employee1=Department.createEmployee('max name with static meth');
console.log(employee1);

//to get static property 'fiscalYear'
console.log(Department.fiscalYear);


//here we what to implement inheritance

 class ITDepartment extends Department {
constructor(id:string,public admins:string[]){
    //use super to caal constructor in the base class
super(id,'IT') //takes arguments of the parent class
}
//describe must be the same implementation as in AccountingDepartment becouse describe marked abstract then here we implement

describe(){
    console.log('ITDepartment - id: '+this.id);
}

}

class AccountingDepartment extends Department{

//mean will store in accDep class
private static instance:AccountingDepartment; //has type of accDepartment class will work with getInsate() method

    //let excute getters and setters here
    private lastReport:string;

    //here we add method to make it still accessible in this class used when we retrieve it and add more complex logic here as developer
    
get mostRecentReport(){ //this is how to create getter funct int important is to return some thing or retreave
if(this.lastReport){
    return this.lastReport;
    
}
else{
    throw  new Error("report not found..!");
}

}

//seter name typicaly its good to same as get

set mostRecentReport(value:string){
    //excute some logic here to add value(report)
if(!value){
    throw new Error("please pass in a value!");
   
}
else{
this.addReport(value);
}
}
//singleton&private constructor
//here we make it private to not be able initialise as to create object
  private  constructor(id:string,public reports:string[]){ 
    
    super(id,'Accounting') 
   this.lastReport=reports[0];   
    }

    //create static method to replace to create object from class with new keyword with above constructor


static getInstance(){
if(AccountingDepartment.instance){
    return this.instance;
}
this.instance=new AccountingDepartment('Id2',[]); //here is to create object inside class not outside
return this.instance; 
}
//about abstract let we override describe method

describe(){
    console.log('Accounting Department - ID: '+this.id); //if id is not protected we get error here becouse id is from parent class Department extended we need in parent clas this id property to change it protected to be able accessed in derived or child class
}



    addReport(text:string){
        this.reports.push(text);
        this.lastReport=text;
    }

    printReports(){
        console.log('Report'+this.reports);
    }

    //we can access employees property from Department class

addEmployee(name:string){
    if(name=='max'){
        return this.name;
    }
    this.employees.push(name);
}


}




//object instatiate to class
const it=new ITDepartment('Id1',['nshimiyimana Admin']); //becouse in constructor we have 2 parameter and here to initialize we use 2 argument
console.log(it);

it.describe();
it.name='NEW NAME';

//after instatiating object we can cal our method to add emploee
it.addEmployee("hakuzimana Aloyz");
it.addEmployee("nshimiyimana jean luc");

//and we use or call our function or method we have been make to display employees

it.printEmployeeInformation();


//becouse is public no secret here we can add add or change employee outside


//accounting.employees[3]="habumugisha"; //here if our employees has private we get err becouse if private you are not able to access and to add or change to employees out side the class



//then create object from AccountingDepartment class
//const accounting=new AccountingDepartment('id2',[]); //if you create obj get err becouse constructor is private we do sth like this by using static meth without instatiating like this

//if done like above its error only we do it by call our static meth getInstance()
const accounting=AccountingDepartment.getInstance();
const accounting2=AccountingDepartment.getInstance();
//if both we console it we get the same object
console.log(accounting,accounting2);


//to initialize by using setter function
accounting.mostRecentReport='my year end report';


accounting.addReport('some thing went wrong .....');


//if we try to get/console mostRecentReport we call method as normal property becouse is how getter method work
console.log(accounting.mostRecentReport);//if no report assigned it throw error is in our mostRecentReport() method

//we use our method addReport to put text of report


//to display our report we use our printReports() method
accounting.addEmployee('max') //if empl name==max return name but not added
accounting.addEmployee('manuelAdded') //this  added becouse not name ===max


/* accounting.printReports();
//then we add employee in our AccountingDepartment

//then we use printEmployeeInformation() method of Department class to display what we have added
accounting.printEmployeeInformation(); */

accounting.describe();

/* 


//this keyword is tricky for example is do like this no compiler error but yiu get undefined in console

                       //to fix err problem here we add name to ts to see name property  
const accountinCopy={name:'dummy name in dummy object',describe:department.describe}; //here we get undefined if we don't have name here not besed on Department class becouse this is dummy object is does not have any instance from class
accountinCopy.describe(); //but if we have name in this accountinCopy object no error but if no name ts search in department class but not possible becouse this param has type of Department means not to exceed limit of Depar class */