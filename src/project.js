import { RenderTodos } from './renderTodos';
import { TodoManager } from './todo';

// Factory
const createProject = ( title, id, todos ) => {
  return { title, id, todos };
};

// Module pattern
const ProjectManager = (() => {

  var selectedProjectId = "";

  let projects = [];
  let project1 = createProject("Project 1", 0);
  let project2 = createProject("Project 2", 1);

  projects = [project1, project2];

  const setProjectId = function(value) {
    selectedProjectId = value;
  }

  const getProjectId = function() {
    return selectedProjectId;
  }

  const selectProject = (e) => {
    setProjectId(parseInt(e.target.id));

    console.log(selectedProjectId);
    console.log(" is now selected!");

    let filteredTodos = TodoManager.todos.filter(todo => todo.projectId === getProjectId());

    RenderTodos.render(filteredTodos);
  }

  return { selectProject, projects, setProjectId, getProjectId };
})()

export { createProject, ProjectManager };