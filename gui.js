//var min = today.getMinutes();

var today = new Date();
var gameTime = today.getHours();
var message;
var greeting = prompt("Hi, let's get accquainted");
//var takeTwo = prompt();
let error;

if(greeting == null || greeting == false){
    let error = prompt("you didn't tell me your name");
     if(error == null || error == false){
         let error = "welcome";
         message = error + gameTime + 'is always game time';
     }else{
        message = error + gameTime + 'is always game time';
     }
}else{
   
   message = greeting + gameTime + "is always game time";

}
  
///////////// above code is close to working but requires a repeat assignment of variable and when the variable is reassigned the value of the prompt variable it does accuire the value of the data entered but rather the value of "true" which is what prints.

document.write(message);


//var today = new Date();
//var time = today.getHours();
//var gameTime = twitch();

//function twitch(
    //var clock = sum(time,today.getMinutes);
    //var greeting = 'hkjhdfkjfahdjk';












