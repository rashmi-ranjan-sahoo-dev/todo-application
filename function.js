let parentdiv = document.querySelector(".box");
// let delete = document.querySelector("button");
// delete.addEventListener("click",()=>{

// })
function createtodo()
{
let input = document.querySelector("input");
let val = input.value;
let list = document.createElement("li");
// list.style.fontSize = "40px"
list.style.listStyle = "none";

list.addEventListener("click",()=>{
    // list.style.class = "done";
    list.classList.add("done");
})
list.innerHTML = `${val}<i class="delete-icon fa-solid fa-trash-can"></i>`;

parentdiv.appendChild(list);

let deletebtn = list.querySelector(".delete-icon");
    deletebtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent the click event from triggering the 'done' class toggle
        list.remove(); // Remove the current list item
    });

}

let addbtn = document.querySelector(".addbtn");
addbtn.addEventListener('click',createtodo);
