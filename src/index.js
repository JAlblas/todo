import { Todo } from './todo';
import { projectFactory, Person } from './project';
import './style.css';

let todo1 = new Todo("clean the house", "clean everything in the house", "31/12/2020", "HIGH", "", []);
todo1.sayHello();

let factory = projectFactory("test", "test");
factory.sayHello();

let person = new Person("name", 15);
person.sayHello();