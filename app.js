let screen = document.getElementById("screen");

function press (numValue){
    if (screen.value == 0)
    {
        screen.value ='';
    }
    screen.value += numValue;
}

function clearScreen (val){
    screen.value = val;
}

function plusminus (){
    var x = screen;
    var y = x.value;
    y = y* -1;
    x.value = y;
}

function calculate (){
    if (screen.value !=''){
        try{
            clearScreen(eval(screen.value))
        }catch(err){
            clearScreen("Bad expression")
        }
    }
}