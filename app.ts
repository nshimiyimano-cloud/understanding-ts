const Person: {
    name:string;
    age:number,
    hobbies:string[]
}={
    name:'maximillian',
    age:30,
    hobbies:['sports','cooking']
}
//if we get unexisted property ide tells us and ts tell it in terminal if you compile ts into js


let FavoriteActivities:string[];  //or any[]
FavoriteActivities=['sports','cooking'];
//to get person name
console.log(Person.name);
//to get hobbies of person
for(const hobbies of Person.hobbies){
    console.log(hobbies);
}