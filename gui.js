
// var today = new Date();
// var gameTime = today.getHours();
// var tick = today.getMinutes();
// var message;
// var greeting = prompt("Hi, let's get accquainted");
// let error;

// if(greeting == null || greeting == false){
//     let error = prompt("you didn't tell me your name");
//      if(error == null || error == false){
//          let error = "welcome";
//          message = error + gameTime + 'is always game time';
//      }else{
//         message = error + gameTime + 'is always game time';
//      }
// }else{
   
//    message = greeting + gameTime + "is always game time";

// }

// document.write(message);

/////////////////// ^ code works!!!! ^^^^^^/////////////////////////////////////

// checks  `error` against null or false returns prompt.


function welcome(){
    var today = new Date();
    var gameTime = today.getHours();
    var tick = today.getMinutes();
    var message;
    var greeting = prompt("Hi, let's get accquainted");
    let error;
    if(greeting == null || greeting == false){
         let error = prompt("you didn't tell me your name");
         if(error == null || error == false){
             let error = "welcome";
             message = error + gameTime + 'is always game time';
             
             document.write(message);
    
         }else{
            message = error + gameTime + 'is always game time';
            
            document.write(message);
    
         }
    } else{
       
       message = greeting + gameTime + "is always game time";
       
       document.write(message);
    

    }
}

welcome();





// for each iteration of null value in prompt up to 2 iterations, return "error" message; store value entered in prompt pull to output in "message" 

// function altMessage(){
//     var error = prompt("I'm sorry I didn't get your name!");
//     for(var i = 0; i < 2; i++){
//         let error = prompt("I'm sorry I didn't get your name!");

//     }
// }


