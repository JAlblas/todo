// Put the object into storage
import { ProjectManager } from "./project";
import { TodoManager } from "./todo";

const Storage = (() => {
    
    const saveData = () => {
        let projects = ProjectManager.projects;
        localStorage.setItem('projects', JSON.stringify(projects));

        let todos = TodoManager.getTodos();
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const loadData = () => {
        ProjectManager.projects = JSON.parse(localStorage.getItem('projects'));
        console.log(JSON.parse(localStorage.getItem('todos')));
        TodoManager.setTodos(JSON.parse(localStorage.getItem('todos')));
    }

    return { saveData, loadData };
})();

export { Storage };
