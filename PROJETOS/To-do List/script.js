


function addTask(){
    
    let tarefaName = document.querySelector("#tarefa").value;
    if(tarefaName.trim() === ""){
        alert("Por favor, digite uma tarefa!");
        return
    }
    
    
    
    //Clonando loyalt
    let loyalt = document.querySelector(".loyalt");
    let loyaltClone = loyalt.cloneNode(true);
    
    
    //adicionando nome;
    loyaltClone.querySelector(".task-nome").textContent = tarefaName;

   

    //removendo classe (DONE) / (HIDE)
    loyaltClone.classList.remove("done");
    loyaltClone.classList.remove("hide");
    document.querySelector("#saida-container").classList.remove("hide")
    
    


    //adicionando funcinalidade de (COMPLETAR) tarefa;
    loyaltClone.querySelector(".button-done").addEventListener("click" , (e)=>{
        e.preventDefault();
        loyaltClone.classList.toggle("done");
    })


    //adicionando funcinalidade de (REMOVER) tarefa;
    loyaltClone.querySelector(".button-del").addEventListener("click" , (e)=>{
        e.preventDefault();
        loyaltClone.remove()  

        let quantidadeDeTarefas = document.querySelectorAll("#lista-das-tarefas .loyalt").length
        let saida = document.querySelector("#saida-container");
            if(quantidadeDeTarefas -1 === 0){
                saida.classList.add("hide")
            }
        
        
    })


    
    //selecionando e adicionando a lista;
    let lista = document.querySelector("#lista-das-tarefas");
    lista.appendChild(loyaltClone)
    


    
}




let btn = document.querySelector("#button-adicionar");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    addTask();
})