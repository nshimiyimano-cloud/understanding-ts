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
    return function(constructor:any){


        //then we see how decorator be excuted from last to first
        console.log('lendering Template......');
const hookEl=document.getElementById(hookId);
const p=new constructor();

// check if var hookEl is a thing not undefined perfom some logic

if(hookEl){
    hookEl.innerHTML=teampalte;
    document.querySelector('h2')!.textContent=p.name;
}

      }
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


//we add other class for our other decorat


//to use our decorator


class Product {
@Log  //our log decorator used inside class
    title:string;
    private _price:number;

    set price(val:number){
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

    getPriceWithTax(tax:number){
        return this._price*(1+tax);
    }
    
}