
let show = document.querySelector("h1")
let input = document.querySelector(".number")
let button = document.querySelector("button")



//    Number Gretning 
button.addEventListener("click", function(){
  if (input.value > 100 || input.value < 0) {
    show.innerHTML = ("Invalited number"); 
    show.style.color = "red"; 
    input.value = ""
}
 else if(!input.value){
     show.innerHTML = ("Please input your number"); 
    show.style.color = "red"; 
    input.value = ""
 }
else if(input.value >=90 &&  input.value <=100){
        show.innerHTML = ("The Gret is = Golden A+");
        show.style.color = "Blue"; 
    input.value = ""
}
else if(input.value >=80 &&  input.value <=89){
        show.innerHTML = ("The Gret is = A+");
        show.style.color = "Blue"; 
    input.value = ""
}
else if(input.value >=70 &&  input.value <=79){
        show.innerHTML = ("The Gret is = A");
        show.style.color = "Blue"; 
    input.value = ""
}
else if(input.value >=60 &&  input.value <=69){
        show.innerHTML = ("The Gret is = A-");
        show.style.color = "Blue"; 
    input.value = ""
}
else if(input.value >=50 &&  input.value <=59){
        show.innerHTML = ("The Gret is = B");
        show.style.color = "Blue"; 
    input.value = ""
}
else if(input.value >=40 &&  input.value <=49){
        show.innerHTML = ("The Gret is = C");
        show.style.color = "Blue"; 
    input.value = ""
}
else if(input.value >=33 &&  input.value <=39){
        show.innerHTML = ("The Gret is = D");
        show.style.color = "Blue"; 
    input.value = ""
}
else{
     show.innerHTML = ("Fail"); 
    show.style.color = "red"; 
    input.value = ""
}
})
//    Number Gretning 












