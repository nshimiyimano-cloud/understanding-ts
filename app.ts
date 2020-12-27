let userInput:unknown;
//what which is good on unknown can store any type of value 
let userName:string;
userInput=5;
userInput='jeanluc';

if(typeof userInput==='string'){
userName=userInput;
}

//on never type
//eg like this funct is by default even console again never return no thing(like undefined) so and as new feature in ts to make code very clear is to put never to say never return nthing if it throw it crashes  script

function generateErrior(message:string,code:number):never{//never can be used on like this here and to show other dev that this funct never return value(more interesting here ever you hover you see is void) 
    throw {message:message,errorCode:code}
}

 var result=generateErrior("an error Occured",500);
 console.log(result);
//watch mode ease time consume to recompile&compile file again and again as for big project to implement watch mode use tsc file --watch or -w in terminal