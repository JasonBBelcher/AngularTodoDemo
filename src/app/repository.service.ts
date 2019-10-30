import { Injectable } from "@angular/core";

@Injectable()
export class RepositoryService {
  private todos = JSON.parse(localStorage.getItem("todos")) || [];

  createTodo(todotext) {
    this.todos.push({
      id: Math.random() * 10,
      text: todotext,
      completed: false,
      priority: 0
    });

    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  getTodos() {
    return Promise.resolve(this.todos);
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    return Promise.resolve(this.todos);
  }

  clearTodos() {
    localStorage.removeItem("todos");
    return Promise.resolve((this.todos = []));
  }
}
