var input = document.getElementById("userInput");
var addBtn = document.getElementById("add"); 
var ol = document.querySelector("ol")
var removeBtn = document.getElementById("remove-btn");
var item = document.querySelectorAll("li");
var CompletedBtn = document.getElementById("completed-btn");
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
            li.addEventListener("click", ()=>{
                li.classList.add("add");
                li.addEventListener("dblclick", ()=>{
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



