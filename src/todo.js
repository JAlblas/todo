

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

    let todo1 = new Todo("clean the house", "clean everything in the house", "31/12/2020", "HIGH", "", [], 0, 0);
    let todo2 = new Todo("shower", "everyone", "31/12/2020", "low", "", [], 1, 1);
    let todo3 = new Todo("shower", "everyone", "31/12/2021", "low", "", [], 2, 1);
    
    todos.push(todo1);
    todos.push(todo2);
    todos.push(todo3);

    const selectTodo = (e) => {
      let selectedProjectId = parseInt(e.target.id);

      let filteredTodos = todos.filter(todo => todo.projectId === selectedProjectId);
      
      RenderTodos.render(filteredTodos);
    }

    const removeTodo = (idToRemove) => {

        let index = todos.map(function(todo) {
            return todo.todoId
        }).indexOf(idToRemove);

        todos.splice(index, 1);
    }
  
    return { selectTodo, todos, removeTodo };
  })()

  
export { Todo, TodoManager };