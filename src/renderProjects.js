import { ProjectManager } from "./project";
import { RenderTodos } from "./renderTodos";

// Module pattern
const RenderProjects = (() => {
    let containerDiv = document.querySelector("#container");

    const render = () => {

        containerDiv.innerHTML = "";

        for (const project of ProjectManager.projects) {
        
            let projectDiv = document.createElement('div');
            
            projectDiv.classList.add('project');
            projectDiv.textContent = project.title;
            projectDiv.id = project.id;

            projectDiv.addEventListener("click", ProjectManager.selectProject);

            containerDiv.appendChild(projectDiv);
        }
    }

  return { render };
  })()
  
  export { RenderProjects };