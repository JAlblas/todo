import { ProjectManager } from "./project";
import { TodoManager } from "./todo";
import { Storage } from './storage';

// Module pattern
const View = (() => {
    let containerDiv = document.querySelector("#container");

    const renderProjects = () => {
        containerDiv.innerHTML = "";
        ProjectManager.setProjectId(null);
        refreshHeader();

        for (const project of ProjectManager.projects) {
        
            let projectDiv = document.createElement('div');
            
            projectDiv.classList.add('project');
            projectDiv.textContent = project.title;
            projectDiv.id = project.id;

            projectDiv.addEventListener("click", ProjectManager.selectProject);

            containerDiv.appendChild(projectDiv);
        }
    }

    const renderTodos = () => {

        containerDiv.innerHTML = "";
  
        refreshHeader();
  
        let filteredTodos = TodoManager.getTodos().filter(todo => todo.projectId === ProjectManager.getProjectId());
        for (const todo of filteredTodos) {
                  
          let todoDiv = document.createElement('div');
          
          todoDiv.classList.add('card');
          todoDiv.textContent = todo.title;
          todoDiv.id = todo.todoId;
  
          let deleteButton = document.createElement('div');
          deleteButton.classList.add("delete");
          deleteButton.textContent = "X";
  
          deleteButton.addEventListener("click", (e) => {
            TodoManager.removeTodo(Number(e.target.parentNode.id));
            renderTodos();
          })
  
          todoDiv.appendChild(deleteButton);
  
          containerDiv.appendChild(todoDiv)
        }
    }

    const refreshHeader = () => {
        if (document.querySelector('.back-button') === null) {
            let header = document.querySelector('header');
            let backButton = document.createElement('button');
            backButton.classList.add('back-button');
            backButton.innerText = "Back to projects";
            backButton.addEventListener("click", View.renderProjects);
            header.appendChild(backButton);
          } else {
            let backButton = document.querySelector('.back-button');

            if (ProjectManager.getProjectId() === null) {
                backButton.style.display = "none";
            } else {
                backButton.style.display = "inline-block";
            }
          }
    }

    const createModal = () => {
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("add-button");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
        modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // Get the button that opens the modal
        var submitButton = document.getElementById("create-todo");
        submitButton.addEventListener("click", (e) => {
            let name = document.getElementById("name").value;
            let description = document.getElementById("description").value;
            TodoManager.addTodo(name, description);
            modal.style.display = "none";
        })

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    return { renderProjects, renderTodos, createModal };
  })()
  
  export { View };