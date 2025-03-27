/*const ausgabe = document.querySelector("#ausgabe");


const add = (a, b) => {
    return a+b;
}

console.log(add(10,2));
const result=add(20,2);

ausgabe.innerHTML = result;*/

 

let versuche=10;


function newrandom (){
    const zzahl= Math.floor(Math.random()*100)+1;
    return zzahl;
}

function checkinput (input,zzahl){
    const message=document.querySelector("#message");
    const winner=document.querySelector("#winner");

    if(input>zzahl){
        message.innerHTML="<div class='text-black text-center'> Die Zahl ist zu groß (Noch "+ versuche + " versuche)</div>"
    }
    else if(input<zzahl){
        message.innerHTML="<div class='text-black text-center'> Die Zahl ist zu klein (Noch "+ versuche +" versuche)</div>"
    }
    else if(input==zzahl){
        message.innerHTML="<div class='text-danger text-center'> Sie haben die Zahl erraten</div>"
        winner.innerHTML="<iframe width='707' height='530' src='https://www.youtube.com/embed/5gCJIzCQxag?autoplay=1' title='Fat brazilian makes cat sounds while breakdancing to some snes like music in a 30 seconds countdown' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>></iframe>"
    
    }

    if(versuche<=0){
        message.innerHTML="<div class='text-black text-center'> Sie haben keine Versuche mehr</div>"
    }

}

function check() {
    //console.log(versuche);
    
    if(versuche==10){
        zzahl=newrandom();    
    }
    
    console.log(zzahl);

    let input=document.getElementById("numberinput").value;
    
    //console.log(input);
    
    checkinput(input,zzahl);

    versuche--;
}

function newgame(){
    versuche=10;
    const message = document.querySelector("#message");
    message.innerHTML="<div class='text-center text-warning'>You started a new game</div>"
    winner.innerHTML="";

}

const input = document.querySelector("input");
input.addEventListener("keyup", (event) =>{
    if(event.key=== "Enter"){
        check();
    }
});


