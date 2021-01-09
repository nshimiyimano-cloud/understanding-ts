interface Greetable{
   readonly name:string;
    
    greet(phrase:string):void;
}
//object should implement our interface
//let user1:Greetable;

//to implement interface in class
class Person1 implements Greetable{
     name:string;
    age=30;
    constructor(n:string){
        this.name=n;
    }

    greet(phrase:string){
        console.log(phrase+' '+this.name);
    }

}
let user1:Greetable; //type Greetable here all work becouse person1 object which store in user one class in end is based on readable interface it implement this
 user1=new Person1('hakuzimana');
 //user1.name='' is error becouse in interface is read only
user1.greet('hi there - i am Jean Luc,age: '); 

console.log(user1);