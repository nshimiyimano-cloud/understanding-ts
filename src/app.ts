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


//then we work with type guard 

function addtwoNum(a:Combinabled,b:Combinabled){

    if(typeof a==='string' || typeof b==='string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

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