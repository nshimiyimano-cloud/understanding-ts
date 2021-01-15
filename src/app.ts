//DECORATORS

//let start we can add class decorators is all about class

function Logger(constructor:Function){
console.log('logging ....... ');
console.log(constructor);    //this wil display our all that bwilds/construct(or class definition) our class parson in console
}
@Logger    //if you hover on this ts show you ''Logger' accepts too sfew arguments to be used as a decorator here. Did you mean to call it first and write '@Logger()'

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