class dataStorage<T extends string |number | boolean >{   //here we try to specify generic class for defining btype every where in this class  
    private data:T[]=[];  //we can use ()paratheses to group out all type as array type eg string[]
    addItem(item:T){   //amd here we put on type of T as used in its class
        this.data.push(item);
    }
    removeItem(item:T){ //amd here we put on type of T as used in its class

        //to fix about if we pass object as item at call addItem() to make sure not remove wrong item when it loose its index instead of remove it return it without delete it

        if(this.data.indexOf(item)===-1){
            return;
        }
      else{
        this.data.splice(this.data.indexOf(item),1);  //after defining type(T) at all every thing is known by TS no throw error
        }

    }

    getItem(){
        return [...this.data];
    }
}

//above our meth and funct parameters has default types are on our class but here we what to override by take only on type(string) not other while at our class we extends those all types as can be used well

var textStoerage=new dataStorage<string>();    //we override default behavior of class types we want only string here not other type
//textStoerage.addItem(20) //will thr error becouse is number but our object have only to manage string
textStoerage.addItem('max');//1st storage
textStoerage.addItem('emanuel') //2nd if we remove max item we will see only emanuel
textStoerage.removeItem('max');

/* 
//to pass in object
textStoerage.addItem({name:'emanuel'})
textStoerage.addItem({name:'max'});

//to remove object no primitive value as element of array will loose its index to delete it

textStoerage.removeItem({name:'emanuel'}); //will reove wrong item
 */
console.log(textStoerage.getItem());




//GENERIC UNTILITY TYPES eg partial

interface CourseGoal{
    title:string;
    description:string;
    completeUntil:Date;
}

function createCource(title:string,
    description:string,
    completeUntil:Date):CourseGoal{ //will return type CourseGoal interface
   // return {title:title,description:description,completeUntil:completeUntil}  //we not doing this in one step

   //we want to define one by one

   let courseGoal:Partial<CourseGoal>={}; //after have type of CourseGoal this object directly bring err on its own becouse is empty object but on its prop err go away to fix it we add partial
   //if not have type of CourseGoal properties will get error not known


   //partial means is gen type will hold a CourseGoal //to add partial means it tells Ts that this is an object which in the end will be a CourseGoal
    courseGoal.title=title;
    courseGoal.description=description;
    courseGoal.completeUntil=completeUntil;

    return courseGoal as CourseGoal;  //here we fix this error by convert this obj to type CourseGoal as typecasting
}
