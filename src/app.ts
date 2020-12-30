
const button=document.querySelector('button')!;

//about strictBindCallApply option eg
function clickHandler(message:string){
    console.log("button clicked now");
}


if(button){
button.addEventListener("click",clickHandler.bind(null,"hello"));//if bind(null) will be error becouse no other org for message parameter so this is on("strictBindCallApply": true)

}