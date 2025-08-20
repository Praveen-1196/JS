window.onload = function () {
    let storedValue = localStorage.getItem("countervalue");
    if (storedValue !== null) {
        storedValue = parseInt(storedValue);
        document.getElementById("counter").textContent = storedValue;
        updateColor(storedValue);
    }
};

document.getElementById("heading").style.color = "#1976D2";

function updateColor(count) {
    const counterElement = document.getElementById("counter");
    if (count > 0) {
        counterElement.style.color = "blue";
    } else if (count < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}


function Increment(){
   let currentValue= document.getElementById("counter").textContent

   currentValue=parseInt(currentValue)
   let count=document.getElementById("counter").textContent=currentValue+1
   count=parseInt(count)
   localStorage.setItem("countervalue",count)
   updateColor(count)

}

function Decrement(){
    let currentValue=document.getElementById("counter").textContent
    currentValue=parseInt(currentValue)
    let count =document.getElementById("counter").textContent=currentValue-1
    count=parseInt(count)
    localStorage.setItem("countervalue",count)
    updateColor(count)



}

function Reset(){
    document.getElementById("counter").textContent=0
    localStorage.setItem("countervalue",count)
    updateColor(count)
}
