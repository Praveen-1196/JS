let fruits_list = [];

let heading = document.createElement("h1");
heading.textContent = "ADD THE ITEMS TO THE CART";
document.body.appendChild(heading);

let user_input = document.createElement("input");
user_input.placeholder = "Enter the Fruits";
user_input.id = "input";
document.body.appendChild(user_input);

let Addbtn = document.createElement("button");
Addbtn.textContent = "+";
Addbtn.className = "addbtn"; 

document.body.appendChild(Addbtn);

let container = document.createElement("div");
document.body.appendChild(container);
 window.onload=function(){
    let storedfruits= localStorage.getItem("fruits")
    if(storedfruits){
        fruits_list=JSON.parse(storedfruits)
        updateList()
    }
 }
function updateList() {
    container.innerHTML = "";

    fruits_list.forEach((fruit, index) => {
        let fruitItem = document.createElement('div');
        fruitItem.style.display = "flex";
        fruitItem.style.alignItems = "center";

        let fruitName = document.createElement('h1');
        fruitName.textContent = fruit;
        fruitName.style.marginRight = "10px";
        fruitName.style.fontSize = "18px";

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "X";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.onclick = function () {
            fruits_list.splice(index, 1);
            localStorage.setItem("fruits",JSON.stringify(fruits_list));
            updateList();
        };

        fruitItem.appendChild(fruitName);
        fruitItem.appendChild(deleteBtn);

        container.appendChild(fruitItem);
    });
}

Addbtn.onclick = function () {
    let cur_name = document.getElementById("input").value.trim();

    if (cur_name === "") {
        alert("Please enter valid data");
        return;
    }

    fruits_list.push(cur_name);
    document.getElementById("input").value = "";
    localStorage.setItem("fruits",JSON.stringify(fruits_list));
    updateList();
};
