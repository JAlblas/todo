import { DOMManager } from './dom';

// Factory
const createProject = ( title, id ) => {
  return { title, id };
};

// Module pattern
const ProjectManager = (() => {
  let selectedProject = "";

  const selectProject = (e) => {
    console.log("Selected project!"); 
    selectedProject = e.target.id;

    DOMManager.showTodos();
  }

  const loadTodos = () => {

  }

  const printLine = () => {
    console.log(("HAHAHA"));
  }
  return { selectProject, printLine };
})()

export { createProject, ProjectManager };