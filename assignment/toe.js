var symbol = "X";

function markbox(id)
{
    if (id.value == "     ")
    {
        id.value = symbol;
    
    
        if (symbol == "X")
    {
        
        symbol = "O";

        if (winning_condition())
        {
        alert ("You win!");
        
        return;
        }
        else  if(!winning_condition())
        {
        alert("You loose!");
        }
        else 
        {
        alert("Draw!")
        }
            
    }   
    if (symbol == "O")
    {
        
       Symbol="X";
        if (winning_condition())
        {
        alert ("You win!");
        
        return;
        }
        else  if(!winning_condition())
        {
        alert("You loose!");
        }
        else 
        {
        alert("Draw!")
        }
            
    }   
    
}

    
}
function winning_condition()
    {
     
    if(document.getElementById("b1").value==symbol && document.getElementById("b2").value==symbol && document.getElementById("b3").value==symbol)
    return true;
    else if(document.getElementById("b4").value==symbol && document.getElementById("b5").value==symbol && document.getElementById("b6").value==symbol)
    return true;
    else if(document.getElementById("b7").value==symbol && document.getElementById("b8").value==symbol && document.getElementById("b9").value==symbol)
    return true;
    else if(document.getElementById("b1").value==symbol && document.getElementById("b4").value==symbol && document.getElementById("b7").value==symbol)
    return true;
    else if(document.getElementById("b2").value==symbol && document.getElementById("b5").value==symbol && document.getElementById("b8").value==symbol)
    return true;
    else if(document.getElementById("b3").value==symbol && document.getElementById("b6").value==symbol && document.getElementById("b9").value==symbol)
    return true;
    else if(document.getElementById("b1").value==symbol && document.getElementById("b5").value==symbol && document.getElementById("b9").value==symbol)
    return true;
    else if(document.getElementById("b3").value==symbol && document.getElementById("b5").value==symbol && document.getElementById("b7").value==symbol)
    return true;
   
    }
    
function clearBtn()
{
    status = "X";
    document.game.b1.value="   ";
    document.game.b2.value="   ";
    document.game.b3.value="   ";
    document.game.b4.value="   ";
    document.game.b5.value="   ";
    document.game.b6.value="   ";
    document.game.b7.value="   ";
    document.game.b8.value="   ";
    document.game.b9.value="   ";
}