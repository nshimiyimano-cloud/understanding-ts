//advanced concept we start with intersection type used to combine multiple types even in case to use union object contains some propertues and its types eg:
type Admin={
    name:string;
    privileges:string[];
};


type Employe={
    name:string;
    startDate:Date;
}

//to intersect we use &
type ElevatedEmployee=Admin & Employe;

//to initialise we depend on our definition struction we defined if not tru type you have defined early ts throw error

const e1:ElevatedEmployee={
    name:'max',
    privileges:['create-server'],
    startDate:new Date()

};
//other somewhere you can use intersection

type Combinabled=string | number;
type Numeric=boolean | number;
//then to join
type Universe=Combinabled & Numeric;



//about FUNCTION OVERLOADS
//then we add other function overloads to contradict our below function to enforce that value we'll pass at calling function must be combinable type

function addtwoNum(a:string,b:string):string;
function addtwoNum(a:string,b:number):string;
function addtwoNum(a:number,b:string):string;
function addtwoNum(a:number,b:number):number;


//then we work with type guard 

function addtwoNum(a:Combinabled,b:Combinabled){  //if we hover on this we see (+3 overloads) becouse above function overloads we added on thi function

    if(typeof a==='string' || typeof b==='string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

//now we are able to call with any type of values becouse funct overloads

const result1=addtwoNum('nshimiyimana','jeanluc');
result1.split(' ');  //but both work  even not this split() not necessary it 
const result2=addtwoNum('my marks',70);
const result3=addtwoNum(30,'peoples');
const result4=addtwoNum(10,20);
console.log('string string: '+result1,'  string number: '+result2,' number string: '+result3,'  number number: '+result4);

type UnknownEmployee=Employe | Admin; //contains with 2 object type

function printEmployeeInformation(emp:UnknownEmployee){
    console.log("name: "+emp.name) //this name found no issue becouse both have name property

//ts does not confirn that it aluays exist on orgument because unknownEmlployee might be a normal employe which does not have preveleged property only admin asked it

   /* this is where typeguard work or needed  console.log('privileges :'+emp.privileges) //here not found in employee  only in admin not in both object type there is issue because exist in admin not in normal employe  */

   //to access it we use check if in emp then access it this the way to access it
   if('privileges' in emp){
       //then access this is the way ts used to acces property not of object
       console.log(emp.privileges[0]);
   }
 //startDate to access it we need to check becouse not in both is only in employe not in admin
   if('startDate' in emp){  //if not in both object type ts throw error because ts does not confirn that it aluays exist on orgument
      
       console.log(emp.startDate);
       
   }
   //above is appropriate check becouse all work in js at runtime
}

//printEmployeeInformation(e1); //to print unknown employee becouse all properties is in admin 

//even you pass your directly values without  take e1 object in this function all work properly because this if check(if('property' in emp))
printEmployeeInformation({name:'imbona Robert',privileges:['access berwa online API'],startDate:new Date()});


//other way when you work with classes
class Car{
drive(){
    console.log('driving....');
}
}
class Truck{
    drive(){
        console.log('driving truck');
    }

    //other method #nt from above

    loadCargo(amount:number){
        console.log('loading cargo.....'+amount)
    }
}

type vehicle=Car | Truck;


//then create object from above classes

const v1=new Car();
const v2=new Truck();


function useVehicle(vehicle:vehicle){
    //this pass becouse in in all classes to check not needed
    vehicle.drive();

    //but here we need to check becouse loadCargo not in all ts not confirn that aluays exist in orgument

    if('loadCargo' in vehicle){
        vehicle.loadCargo(3000); //this loadcargo exist in this if block{} other not exist because this if('prop' in ---)
    }
}
//to call our function
useVehicle(v1);
useVehicle(v2);

//on descriminated union

interface Bird{
    //to make discriminated we add extra property with name you want as literal type
    type:'bird',
    flyingSpeed:number
}
interface Horse{
    type:"horse",
    runningSpeed:number
}

//then here we use union type

type Animal=Bird | Horse;

function moveAnimal(animal:Animal){
    //we need to check
    //if('flyingSpeed' in animal) //instead of this below is how to implement discriminated with named literal types
    //console.log('Moving with speed:'+animal.flyingSpeed);    //here we can acces any property but they have different properties 
let speed;    //we  need this internal variable
    switch(animal.type){  //this type property understood at all because both interface have it

case 'bird':
    speed=animal.flyingSpeed;

    break;
    case 'horse':
        speed=animal.runningSpeed;

    }
    console.log('Moving at speed: '+speed);
}
moveAnimal({type:"bird",flyingSpeed:10}) //if you choose type:horse property must be runningSpeed,as here if we write runningSpeed at this type of bird you line on it as TSC error


//type casting
//<this ttpe> will known by ts becuse lib{dom":"true"}
const inputElement= <HTMLInputElement>document.getElementById('user-input')!; //this is first version to use typecasting<---> after this  code on 252 will run no error
//const inputElement=document.getElementById('user-input') as HTMLInputElement;
////if(inputElement){
//to access it
inputElement.value='hello jeanluc';
//}

//87 . about index property

//this is how we can define all strict which property name or property values user should use

interface ErrorContainer{

    //to define done by square bla then propname:type and value type( [key or prop:string]:string)
    [prop:string]:string;
}

//then object we'll assign on our interface for validating our eg err message

const ErrorBag:ErrorContainer={
  //  email:'this prop name not allowed this is eg err mesg' //if prop:number tsc will throw 'Type '{ email: string; }' is not assignable to type 'ErrorContainer'.'
    email:'Not valid Email',
    name:'you must start with character'
}
//above section is how we can write flexible code and toi focus on just types how we can manage them

console.log(ErrorBag.email+"   ,  "+ErrorBag.name);