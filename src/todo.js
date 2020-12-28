class Todo {
    constructor(title, description, dueDate, priority, notes, checklist, todoId, projectId) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.todoId = todoId;
        this.projectId = projectId;
    }
}

const TodoManager = (() => {

    let todos = [];

    let todo1 = new Todo("clean the house 1", "clean everything in the house", "31/12/2020", "HIGH", "", [], 0, 0);
    let todo2 = new Todo("shower 2", "everyone", "31/12/2020", "low", "", [], 1, 1);
    let todo3 = new Todo("shower 3", "everyone", "31/12/2021", "low", "", [], 2, 1);
    
    todos.push(todo1);
    todos.push(todo2);
    todos.push(todo3);

    const getTodos = () => {
        return todos;
    }

    const removeElementFromTodos = (index) => {
        todos.splice(index, 1);
    }

    const selectTodo = (e) => {
        console.log("SELECTING TODO");
    }

    const removeTodo = (idToRemove) => {

        let index = getTodos().map(function(todo) {
            return todo.todoId
        }).indexOf(idToRemove);

        removeElementFromTodos(index);
    }

    const addTodo = (name) => {
        console.log("CREATING TODO!");
        todos.push(new Todo(name, "everyone", "31/12/2021", "low", "", [], 2, 1));
    }
  
    return { selectTodo, getTodos, removeTodo, addTodo };
  })()

  
export { Todo, TodoManager };