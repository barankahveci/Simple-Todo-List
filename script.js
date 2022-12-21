const textInputDOM = document.getElementById("todo-input");
const btnaddTodoDOM = document.querySelector("#todo");
const todosDOM = document.querySelector("#todos");
const btnClearDOM= document.querySelector("#clear");


let textInputValue = "";
let todos = [];
 
textInputDOM.addEventListener("change", function(event){
    textInputValue=event.target.value
    console.log(textInputValue);
});
btnaddTodoDOM.addEventListener("click",addTodo);
btnClearDOM.addEventListener("click", clearTodos);

function addTodo(e){
    e.preventDefault();
    todos.unshift({ "id": todos.length +1, "todoTitle": textInputValue});
    textInputDOM.value = "";
    displayTodos()
    
    
}
function displayTodos(){
    let result = "";

    if(todos.length===0){
    todosDOM.innerHTML = "Liste Boş!"
    }else{
        todos.forEach((item) =>{
            result += `<li>
            <span>${item.todoTitle}</span>
            <button onclick="deleteTodo(${item.id})"> Sil</button>
        </li>
            `;
        });
        todosDOM.innerHTML = result;

    }


}
function deleteTodo(id){
    let deleteID;
    for(let index in todos){
        if(todos[index].id == id){
            deleteID=index;
        }

    }
    todos.splice(deleteID, 1)
    displayTodos()
}
function clearTodos(){
    todos.splice(0, todos.length);
    displayTodos();
}



















displayTodos()