const input = document.getElementById("userInput");
const addBtn = document.getElementById("add"); 
const ol = document.querySelector("ol")
const removeBtn = document.getElementById("remove-btn");
const item = document.querySelectorAll("li");
const CompletedBtn = document.getElementById("completed-btn");
// input.addEventListener("click", ()=>{
//     console.log(input.value)
// })

addBtn.addEventListener("click", ()=>{
    var inputValue = input.value;
    if(inputValue > 0 || inputValue > ""){
        function createList(){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(inputValue));
            ol.appendChild(li);
            input.value = "";
            //double-click an item for mark as complete
            li.addEventListener("dblclick", ()=>{
                li.classList.add("add");
                li.addEventListener("click", ()=>{
                    li.classList.remove("add")
                })
            })
            removeBtn.addEventListener("click", ()=>{
                li.classList.add("delete");
             })
             //Completed Btn
             CompletedBtn.addEventListener("click", ()=>{
                li.classList.add("add");
                CompletedBtn.addEventListener("dblclick", ()=>{
                    li.classList.remove("add");
                })
            })
        }
        createList();
    }
})



