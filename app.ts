function combine(input1:number| string, input2:number | string) {

    let result;
if(typeof input1 === 'number' && typeof input2 === 'number'){


result= input1 + input2;

}
else{
   result=input1.toString()+input2.toString();
}     
  return result;
 }

 const combineAges=combine(30,26);//if this but is string its throw anerror here union is needed eg number | string
 console.log(combineAges);
 const combineNames=combine('mix','anna')//if this but is number its throw an error
 console.log(combineNames);