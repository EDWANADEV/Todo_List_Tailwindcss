const btn = document.getElementById("btn");
 function addtask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();


  if (taskText !== "") {
    const div = document.createElement("div");

    div.classList.add("task");
    const all_list = document.querySelectorAll(".task");
    let lentgh = all_list.length;

    div.innerHTML += `<div> <span class="done text-blue-950">rrr</span>  </div>
      <div class="overflow-auto max-w-full text-white flex-1">   <span class="task-text ">${taskText}</span>  </div>
        <div> <span class="delete_btn">Delete</span> </div>`;
    const deleteBtn = div.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", () => {
      div.remove();
    });
          const line= div.querySelector(".task-text")
          line.addEventListener("click",()=>{
             done.classList.toggle("done_active");
      done.textContent="✔️"
      line.classList.toggle("task-text-done");
      line.style.color="gray"
          })
    const done = div.querySelector(".done");
    done.addEventListener("click", () => {
      done.classList.toggle("done_active");
      done.textContent="✔️"
      line.classList.toggle("task-text-done");
      line.style.color="gray"
    });
    if (lentgh >= 8) {
      alert("Vous ne pouvez pas ajouter plus de 8 tâches.");
      return;
    }
    document.querySelector(".container").appendChild(div);
    taskInput.value = "";
  }
}
document.querySelector("input").addEventListener("keydown", (e) =>{
                if(e.key==="Enter"){
                addtask()
                 
                }
})
btn.addEventListener("click",()=>{
  addtask()
}
)