const names:string="nshimiyimana";

const button=document.querySelector('button');

//a good is to check if button has ot get a value this is good of "strictNullChecks":true  becouse check if the error found on button.addListener goes away


if(button){ //it need developer to know if it not get null value
button.addEventListener("click",()=>{
console.log('button habe clicked');
})
}

//const map=new Map();//if target js version is es5 this not recorganized by ts becouse this include in es6
const personNames:string[]=["NSHIMIYIMANA","jeanluc","HABIHIRWE","johnus"];
for (const i of personNames) {
    console.log(i);
}