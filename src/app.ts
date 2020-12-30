const names:string="nshimiyimana";

const button=document.querySelector('button');
button?.addEventListener("click",function(){
console.log('button habe clicked');
})

//const map=new Map();//if target js version is es5 this not recorganized by ts becouse this include in es6
const personNames:string[]=["NSHIMIYIMANA","jeanluc","HABIHIRWE","johnus"];
for (const i of personNames) {
    console.log(i);
}