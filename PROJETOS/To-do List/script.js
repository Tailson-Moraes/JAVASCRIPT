

//Clonando loyalt

function addTask(){
    let tarefaName = document.querySelector("#tarefa");

    console.log(tarefaName.value)
}




let btn = document.querySelector("#button-adicionar");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    addTask();
})