//DECORATORS

//let start we can add class decorators is all about class

/* 
function Logger(constructor:Function){
console.log('logging ....... ');
console.log(constructor);    //this wil display our all that bwilds/construct(or class definition) our class parson in console
@Logger    //if you hover on this ts show you ''Logger' accepts too sfew arguments to be used as a decorator here. Did you mean to call it first and write '@Logger()'


} */


//then we change our function to decorator factory


function Logger(logString:string){

    console.log('LOGGER FACTORY FUCTION'); //if we excute sth here in funct body without in its return template decora run last of logger decor sfactory fun
    return function(constructor:Function){
        //to display message we will pass in our decorator when we excute it
        console.log(logString);   //we pass this parameter instead of passe in a message

        //and then display our construct as class definition
        console.log(constructor);
    }
}


//when we excute our decorator we write it as function that has argument eg func() with ()
 /* if we not pre with@ constructor not be displayed on message be displayed other in decprator not */
  //@Logger("logging - Parson..")//if we write() we directly see in this () we pass in a string




  //  ----THEN WE ADD OR BUILD MORE USEFUL DECORATO

  function WithTemplate(teampalte:string,hookId:string){  //here we wanty to render template which would be htmlcode into someplace in dom where i find this id
      

    console.log('TEMPLATe FACTORY')
    return function<T extends {new(...orgs:any[]):{name:string}}>(orginalConstructor:T){  //we fix problem to if we call   @WithTemplate('<h2>this is person object</h2>','app' its type not known and if we this.name name not nown ti fix it we :{name:string} as returned

        //we add new contructor as new fuctionality to still keep all properties of orginal constr here


        //then we see how decorator be excuted from last to first
       

return class extends orginalConstructor{  //this constr is based on orginal constructorfunction (above) it keep all property and methods on org constructor function without loose it

constructor(..._:any[]){  //we pass in ..._ instead of ...orgs as not well this param is nececary
    //we gona call arginal constructor
    super();
    //we gonne move logic for rendering from org constr to this constru

    console.log('lendering Template......');
    const hookEl=document.getElementById(hookId);
    //const p=new orginalConstructor(); //we don't call return constructor here like this we use this key word for 2nd constructor in this unnamed class
    
    // check if var hookEl is a thing not undefined perfom some logic
    
    if(hookEl){
        hookEl.innerHTML=teampalte;
        document.querySelector('h2')!.textContent=this.name/* p.name; here we're allowed to use this keword becuse its as normal constructo not as above return constructor */
    }
}

}

      }

//after change our program still work well as previous


  }

//we can add more than one decorato

@Logger('Logging parson object....')

  //to excute our useful decorator
  
  @WithTemplate('<h2>this is person object</h2>','app')//this 2nd arg is id from our div id in index.html




class Parson{
    
    name='max';
    constructor(){
        console.log('creating person object.....');
    }
}

const pers=new Parson;
//if we visit page we see message  creating person object.....
console.log(pers) //the we see message to create object parson  and output 
//but above example no decoratos involved



//otehr places we can add our decorator

//thenn we add decorator decorator have argument depend on where will be used

//here we'll need 2 args target as object will created/instantited and propertyNmae as property in our object
function Log(target:any,propertyName:string | symbol){    //on target has any because we don't know which type our object will use/have,but property may be str or symbol

console.log('property DECORATOR'); //we will seee when this runs
console.log(target,propertyName);

}


//accessor decoratir this is for our _price property

function Log2(target:any,propertyName:string,descriptor:PropertyDescriptor){ //this property descritor type built in typescript
    console.log('ECCESSOR DECORATOR');

    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}

 //other decpr for getter function alse it has target to display prototype of our obj/class and name and descriptor params

 function Log3(target:any,name:string|symbol,descriptor:any){
    console.log('METHOD decorator');
    console.log(target);
    console.log(name)
    console.log(descriptor);
} 

function Log4(target:any,name:string,position:number){  //this position is for a position of arg go with parameter
    console.log('PARAMETER DECPRATOR');
    console.log(target);
    console.log(name);
    console.log(position); //we'll see 0 becouse index of argument start from0
}



//we add other class for our other sdecorat


//to use our decorator


class Product {
@Log  //our log decorator used inside class title dec
    title:string;

//this is _price decorator

    private _price:number;

    @Log2
//SETTER FUNCTION
    set price(val:number){  //on decora to display propertyname we see price becouse is  for this setter function not for _price property
        if(val>0){  //this check is for to not set negative price
            this._price=val;
        }
        else{
            throw  new Error('invalid price - should be positive');
        }
    }

   
    constructor(t:string,p:number ) {
        this.title=t;
        this._price=p;
    }




    //we call Log3 for this method getpriceWithTax



    @Log3
//GETTER FUNCTIONs

    getPriceWithTax(@Log4  tax:number){
        return this._price*(1+tax);
    }
    
}

// EXAMPLE: creating an 'Autobind' decorator (couse to not return undefined when we click button to trigger what are in our eventListener)




//even this args change into _:any,_2:string no problem becouse not should be used by ts as descriptor param
function  Autobind(target:any,methodName:string,descriptor:PropertyDescriptor) { //we hav target as prototype of our cl because we do instantiate with constructor
    //to make sure this keyword is to object this method eg addListener belongs to it yet we achive that by do this(to access orgina methos)
    const orginalMethod=descriptor.value;
    const adjDescriptor:PropertyDescriptor={  //iyaherekeza propDescr ibi nibyi bizaba returned later
        //we are able to set 
        configurable:true,
        enumerable:false,
        get(){
                    //and our get where this allow to bind when user try tio access property


                    //if we remove bind(this) we w'll get undefined as before
        const boundFuction=orginalMethod.bind(this); //we get our org method then bind to our object to not return undefined
        return boundFuction;
        }
        //and here we return adjDes


    }

    return adjDescriptor;

}

//let we create a class to print message we'll used when we click button
class  Printer {
    message='this works';

    //we add our decorator to bind on this method

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p=new Printer();


const btn=document.querySelector('button')!;

//btn.addEventListener('click',p.showMessage)
//above not work becouse no reference to p becouse our msg limited on p(printer) becouse that this keywird to reference on our p object we do binding with bind() method

// we have to rid this becuse we have decorator functionality to autobind  btn.addEventListener('click',p.showMessage.bind(p)); //work well but this is default js now we can make dec to autobind to this every time this called
btn.addEventListener('click',p.showMessage); 

//VALIDATING with decorators -first step //some app like web service return sth but not sure that have guaratee of input if is validated

//validation decorators

//decorator to apply our below validation ligic

function Validate(obj:object){}  //we use this but in next module we see package to validate well
//above  we can check if tis storage for your object we got for the class the object is based on we do have validated registered for title, for price and so on then run our validat logic that my idea(instructor) here

function Required(){  //for title

}

function Positivenumber(){ //this is for proce:number

}







class Course{

    @Required
    title:string;
    @Positivenumber
    price:number;
    constructor(t:string,p:number){
        this.title=t;
        this.price=p;
    }


}
//then we add form in our ind.html
const courseForm=document.querySelector('form')!;

courseForm.addEventListener('submit',event=>{
    event.preventDefault(); //here is to prevent form from be submited without http request (without fill it)
    //then next we extract data title& price

    const titleEl=document.getElementById('title') as HTMLInputElement;   //here we use typecasting this couse ts to unders is input then  be able to recorganize oll property are to input eg .value...
    const priceEl=document.getElementById('price') as HTMLInputElement;

    //to get form data
    const title=titleEl.value;
    const price=+priceEl.value;  //to change this into number as in ts how done we add +sign


    //in normal js we can validate  titlelike        //if(title.trim().length>0){} then implement  we solve this with decorator
    //then we gonna create course
    const createCourse=new Course(title,price); //if no+sign we get err on this price arg because every input ts take it as string
    console.log(createCourse);


    //eg to apply our all validation logic above if not filled(required) and if not positive number throw error

    if(!Validate(createCourse)){
alert('Invalid input, try again');
    }
    else{
        return;
    }

})
//all work but if we save without date it save with empty data this is not valid for our application

