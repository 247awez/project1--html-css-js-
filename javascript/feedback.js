let a1 = document.querySelector("#q1");
let a2 = document.querySelector("#q2");
let a3 = document.querySelector("#q3");

a1.addEventListener('click',()=>{
    console.log("clicked");
    var b1 = document.querySelector("#a1");

if(b1.style.display==="none"){
    b1.style.display="block"
}
else{
    b1.style.display="none"
}
});

a2.addEventListener('click',()=>{
    console.log("clicked");
    var b2 = document.querySelector("#a2");

if(b2.style.display==="none"){
    b2.style.display="block"
}
else{
    b2.style.display="none"
}
});

a3.addEventListener('click',()=>{
    console.log("clicked");
    var b3 = document.querySelector("#a3");

if(b3.style.display==="none"){
    b3.style.display="block"
}
else{
    b3.style.display="none"
}
});




function clicked(){
    alert("its just an demo website ...can't submit form..")
}