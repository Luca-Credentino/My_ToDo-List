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
    let inputValue = input.value;
    if(inputValue > 0 || inputValue > ""){

        function createList(){
            let li = document.createElement("li");
            
            let checkBox = document.createElement("input") //checkbox
            checkBox.type = "checkbox"
            checkBox.id = "test"
            checkBox.className = "checkbox"

            /* FavIcon: trashCan  */
            var deleteIconBox = document.createElement("i")
            deleteIconBox.className = "fas fa-trash-alt deleteicon"

            //appendchild
            li.appendChild(document.createTextNode(inputValue));
            li.appendChild(checkBox)
            li.appendChild(deleteIconBox);
            ol.appendChild(li);
            input.value = "";

            //removeBtn
            removeBtn.addEventListener("click", ()=>{
                li.classList.add("delete");
             })
            //trashCan icon onclick
            deleteIconBox.addEventListener("click", ()=>{
                
            })
             //Completed Btn
             CompletedBtn.addEventListener("click", ()=>{
                checkBox.checked = "checked"
                CompletedBtn.addEventListener("dblclick", ()=>{
                    checkBox.checked = ""
                })
            })
        }
        createList();
    }
})



