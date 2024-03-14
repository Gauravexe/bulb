var blb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var i = 0
btn.addEventListener("click", function(){
    if (i == 0){
        blb.style.backgroundColor = "yellow"
        console.log("clicked") 
        i = 1
    }
    else{
        blb.style.backgroundColor = "transparent"
        console.log("un-clicked") 
        i = 0
    }

}
)
