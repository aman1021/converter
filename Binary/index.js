let div1 = document.getElementById('div1');
div1.addEventListener('mousemove', runEvent);
function runEvent(e){
       document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}

let screen = document.getElementById('screen');
let button = document.getElementById('reset');
let screenValue ='';
function myFunction(e){

    
    let a =  document.getElementById("screen").value;

    console.log(a);
    console.log(typeof a);

    a = Number(a);  //the very important line of code.

    let b = a.toString(2); //BINARY VALUE

    let c = a.toString(16); //HEXADECIMAL
    
    let d = a.toString(8);  //OCTAL

    document.getElementById("demo").innerHTML = Number(b);
    document.getElementById("demo1").innerHTML = c;
    document.getElementById("demo2").innerHTML = Number(d);

}

function refun(e){
   document.getElementById('screen').value = ' ';
   document.getElementById("demo").innerHTML = 0;
   document.getElementById("demo1").innerHTML = 0;
   document.getElementById("demo2").innerHTML = 0;
   
}