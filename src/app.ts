interface person{
    name:string;
    age:number;
    greet(phrase:string):void;
}
//object should implement our interface
let user1:person;
user1={
    name:'nshimiyimana',
    age:19,
    greet(phrase:string){
        console.log(phrase + ''+this.name)
    }
};
user1.greet('hi there - i am Jean Lucs');