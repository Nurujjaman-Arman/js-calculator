let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
screenValue="";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;

        if(buttonText=="AC"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            screen.value=eval(screenValue);
        }
        else if(buttonText=="DEL"){
            screenValue="";
            screen.value=screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value=screenValue;
        }
    })
}
