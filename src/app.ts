const names:Array<string>=[]; //this is gener to define type of values will be store in our array while normally is like eg names:string[]=[....]

// other generic type is promise


const promise:Promise<string>=new Promise((resolve,rejected)=>{//you can say <number...>
    setTimeout(()=>{
        resolve('this is done') //if value type is number here must resolve numbe as will be returned
    },3000);
});
promise.then((data)=>{ //if type is number and you hover on (data) param you see hass type of number but now is string
    console.log(data);
})
