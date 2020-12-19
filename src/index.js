import { Todo } from './todo';
import { createUser, Person, Module } from './project';
import './style.css';

let todo1 = new Todo("clean the house", "clean everything in the house", "31/12/2020", "HIGH", "", []);
todo1.sayHello();

let todo2 = new Todo("shower", "everyone", "31/12/2020", "low", "", []);
todo2.sayHello();

let todos = [todo1, todo2];

let factory = createUser("jasper", "test");
factory.setUserName("jasper 2", "mg");

let person = new Person("name", 15);
person.sayHello();

Module.printLine();

let container = document.querySelector("#container");

for (const todo of todos) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.textContent = todo.title;
    container.append(cardDiv)
}
  

