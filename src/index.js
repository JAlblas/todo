import { View } from './view';
import { Storage } from './storage';
import './style.css';
import { TodoManager } from './todo';

Storage.loadData();
View.createModal();
View.renderProjects();

