import { RenderTodos } from './renderTodos';
import { Todo, TodoManager } from './todo';

// Factory
const createProject = ( title, id, todos ) => {
  return { title, id, todos };
};

// Module pattern
const ProjectManager = (() => {

  let projects = [];
  let project1 = createProject("Project 1", 0);
  let project2 = createProject("Project 2", 1);

  projects = [project1, project2];

  const selectProject = (e) => {
    let selectedProjectId = parseInt(e.target.id);
    
    let filteredTodos = TodoManager.todos.filter(todo => todo.projectId === selectedProjectId);

    RenderTodos.render(filteredTodos);
  }

  return { selectProject, projects };
})()

export { createProject, ProjectManager };