const Person: {
    name:string;
    age:number,
    hobbies:string[],
    role:[number,string]//this marks type of tuple fixed length of 2 numeric&string
}={
    name:'maximillian',
    age:30,
    hobbies:['sports','cooking'],
    role:[2,'author']
}
//to push other value it become problem becouse ts not u derstand this becouse role must be only 2element no other
Person.role.push('admin');
//but here we put numeric element on second index it emit error
//Person.role[1]=10;
// Person.role=[0,'admin','users']; and this is not work becouse elements changes int 3

// console.log(Person.role[2]);

//inferred=byemejwe
//if we get unexisted property ide tells us and ts tell it in terminal if you compile ts into js


let Favoriteactivities:string[];  //or any[]
Favoriteactivities=['sports','cooking'];
//to get person name
console.log(Person.name);

//to get role
console.log(Person.role[1]);
//to get hobbies of person
for(const hobbies of Person.hobbies){
    console.log(hobbies.toUpperCase());
   // console.log(hobbies.map()); //other method no problem but becouse map not done for type of string with throw error------
    // Property 'map' does not exist on type 'string'.
}