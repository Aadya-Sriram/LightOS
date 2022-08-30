function getBotResponse(input) {
   
    //rock paper scissors

    if (input == "#help") {
    return "#open-apps = Opens the all apps menu in LightOS  ;  #kill = closes the command window  ;  #lightos-help = this will take you to our contact  ;  #about = about lightos";
    } else if (input == "#kill") {
        return window.location.href='kill.html';
    } else if (input == "#return-lightos") {
        return window.location.href ='./main.html';
    }
    

    // Simple responses
    if (input == "#open-apps") {
        return window.location.href = 'launch.html'
    } else if (input == "#about") {
        return window.location.href='about.html';
    
    } 
    else if (input == "#lightos-help") {
        return window.location.href='a.html';
    
    } 
     else {
        return "Command is not recorgnized please enter a valid command or type help to view all commands";
    }

    
}