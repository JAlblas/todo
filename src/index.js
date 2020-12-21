import { Todo } from './todo';
import { createProject, ProjectManager } from './project';
import './style.css';

let todo1 = new Todo("clean the house", "clean everything in the house", "31/12/2020", "HIGH", "", []);
todo1.sayHello();

let todo2 = new Todo("shower", "everyone", "31/12/2020", "low", "", []);
todo2.sayHello();

let todos = [todo1, todo2];

let project1 = createProject("Project 1", 1);
let project2 = createProject("Project 1", 2);


let projects = [project1, project2];


let container = document.querySelector("#container");

for (const project of projects) {
    let projectDiv = document.createElement('div');
    
    projectDiv.classList.add('card');
    projectDiv.textContent = project.title;
    projectDiv.id = project.id;

    projectDiv.addEventListener("click", ProjectManager.selectProject);
    container.append(projectDiv)
}
  

