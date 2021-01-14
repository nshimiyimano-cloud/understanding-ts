class dataStorage<T>{   //here we try to specify generic class for defining btype every where in this class  
    private data:T[]=[];  //is lik to say string[] &here will store type(T) of array(T[])
    addItem(item:T){   //here we get error becouse ts not know the type will be returned
        this.data.push(item);
    }
    removeItem(item:T){ //(indexOf(item),1) 1 means will remove only one item if not that 1 will remove all items

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

//now we can create different storages

//var textStoerage=new dataStorage<string>() //<string> means our object is to pass in only string if you passin number TS will throw error

//our class to make it more flexible we can give it possible to receive both type whether string or number,.. every type you want

var textStoerage=new dataStorage<string | number | object>();
//textStoerage.addItem(20) //will thr error becouse is number
/* textStoerage.addItem('max');//1st storage
textStoerage.addItem('emanuel') //2nd if we remove max item we will see only emanuel
textStoerage.removeItem('max'); */


//to pass in object
textStoerage.addItem({name:'emanuel'})
textStoerage.addItem({name:'max'});

//to remove object no primitive value as element of array will loose its index to delete it

textStoerage.removeItem({name:'emanuel'}); //will reove wrong item

console.log(textStoerage.getItem());