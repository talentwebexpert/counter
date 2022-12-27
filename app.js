let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(button=>{
    button.addEventListener("click", function(){
       if(button.textContent === "decrease"){
        count--
       } else if(button.textContent === "reset"){
        count = 0
       } else if(button.textContent === "increase"){
        count++
       }
       if(count<0){
        value.style.color = "red"
       } else if(count>0){
        value.style.color = "green"
       } else if(count===0){
        value.style.color = "#102A42"
       }
       value.textContent = count
    })
    
})