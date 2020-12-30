//this file is to hypothetically send analytic data for our server and we import it in index.html

console.log("sending data..."); //we can send http requ to our analytic server

//on strict where you can choose below aptions with your wishes or use only strict:true


let logged;
function sendAnalytics(data:string){ //here if param with no type if still be error  "noImplicitAny": true still be setted true if false no err to not define param type 
    console.log(data);

    logged=true;
    
    console.log(logged);
}
sendAnalytics("send analytic data");