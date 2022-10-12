
const increase = document.getElementById("incrbtn")
const decrease = document.getElementById("decrbtn")
const reset = document.getElementById("resetbtn")
const counter = document.getElementById("counter")
let count = 0

increase.addEventListener("click", ()=>{
    count = count+1
    counter.innerHTML = count

});


decrease.addEventListener("click", ()=>{
    
    if(count>0){
        count = count -1
        counter.innerHTML = count    }
    else{
            alert("Counter Can't be less than Zero.")

    }

});


reset.addEventListener("click", ()=>{
    count = 0;
    counter.innerHTML = count;

});