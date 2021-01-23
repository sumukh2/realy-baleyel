
function submit(){
  test1=document.getElementById("test");
  if(test1.value=="1"){
    window.location.href="Glucose.html";
  }
  else if(test1.value=="2"){
    window.location.href="Sodium.html";
  }
  else if(test1.value=="3"){
    window.location.href="Potassium.html"
  }
  else if(test1.value=="4"){
    window.location.href="Magnesium.html"
  }
}




function resultG(){
  results=document.getElementById("valG");
  if(results.value==""){
    document.getElementById("display").innerHTML="please enter value in mg/dl";
  }
  else if(results.value<50 || results.value>250){
    document.getElementById("display").style.color="red";
    document.getElementById("display").innerHTML="your result falls in the red flag range. Please consult a doctor";
  }
  else{
    document.getElementById("display").style.color="green";
    document.getElementById("display").innerHTML="your result falls in the safe range so stay safe stay healthy";
  }
}


function resultS(){
  results=document.getElementById("valS");
  if(results.value==""){
    document.getElementById("display").innerHTML="please enter value in mg/dl";
  }
  else if(results.value<125 || results.value>155){
    document.getElementById("display").style.color="red";
    document.getElementById("display").innerHTML="your result falls in the red flag range. Please consult a doctor";
  }
  else{
    document.getElementById("display").style.color="green";
    document.getElementById("display").innerHTML="your result falls in the safe range so stay safe stay healthy";
  }
}


function resultP(){
  results=document.getElementById("valP");
  if(results.value==""){
    document.getElementById("display").innerHTML="please enter value in mg/dl";
  }
  else if(results.value<3 || results.value>6){
    document.getElementById("display").style.color="red";
    document.getElementById("display").innerHTML="your result falls in the red flag range. Please consult a doctor";
  }
  else{
    document.getElementById("display").style.color="green";
    document.getElementById("display").innerHTML="your result falls in the safe range so stay safe stay healthy";
  }
}

function resultM(){
  results=document.getElementById("valM");
  if(results.value==""){
    document.getElementById("display").innerHTML="please enter value in mg/dl";
  }
  else if(results.value<1.2 || results.value>2.6){
    document.getElementById("display").style.color="red";
    document.getElementById("display").innerHTML="your result falls in the red flag range. Please consult a doctor";
  }
  else{
    document.getElementById("display").style.color="green";
    document.getElementById("display").innerHTML="your result falls in the safe range so stay safe stay healthy";
  }
}