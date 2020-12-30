
type Combinable=number | string;
type conversionDescriptor='as-number' | 'as-text';

function combine(
  input1:Combinable, 
  input2:Combinable,
  resultConversion:conversionDescriptor) { //here union is necessary becouse we need to concatunate and to calculate as number both needed as literal type if only 'as-number' when you compile it throw err that on mix anna not assignable as-text but is as-number above as declared.as-text can not be understood

    let result;
if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){  //here number or string types not work the literal types as-number and as-text only work


result= +input1 + + input2;

}
else{
   result=input1.toString()+input2.toString();
}  

/* if(resultConversion==='as-number'){//not run it still giving dead output
  return +result;
}
else{
  return result.toString();
} */

return result;
 }

 const combineAges=combine(30,26,'as-number');//if this but is string its throw anerror here union is needed eg number | string

 console.log(combineAges);
 const combineStringAges=combine('30','26','as-number');//above logic is bad becouse here it be concatenated
 console.log(combineStringAges);
 const combineNames=combine('mix','anna','as-text')//if this but is number its throw an error
 console.log(combineNames);