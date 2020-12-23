import { ProjectManager } from "./project";
import { RenderProjects } from "./renderProjects";

// Module pattern
const RenderTodos = (() => {
    let containerDiv = document.querySelector("#container");

    const render = (todos) => {

      containerDiv.innerHTML = "";

      if (document.querySelector('.back-button') === null) {
        let header = document.querySelector('header');
        let backButton = document.createElement('button');
        backButton.classList.add('back-button');
        backButton.innerText = "Back to projects";
        backButton.addEventListener("click", RenderProjects.render);
        header.appendChild(backButton);
      }


      for (const todo of todos) {
                
        let todoDiv = document.createElement('div');
        
        todoDiv.classList.add('card');
        todoDiv.textContent = todo.title;
        todoDiv.id = todo.projectId;

        let deleteButton = document.createElement('div');
        deleteButton.classList.add("delete");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", (e) => {
            console.log(e.target.parentNode.id);
        })

        todoDiv.appendChild(deleteButton);

        containerDiv.appendChild(todoDiv)
      }
    }

  return { render };
  })()
  
  export { RenderTodos };