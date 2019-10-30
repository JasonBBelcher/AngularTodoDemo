import { Component, OnInit } from "@angular/core";
import { RepositoryService } from "./repository.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  todos: any[];

  constructor(private repository: RepositoryService) {}
  ngOnInit() {
    this.repository.getTodos().then(todos => {
      this.todos = todos;
    });
  }

  addTodo(input) {
    if (input.value) {
      this.repository.createTodo(input.value);
      this.getTodos();
      input.value = "";
    } else {
    }
  }

  clearTodos() {
    this.repository.clearTodos().then(todos => {
      this.todos = todos;
    });
  }

  getTodos() {
    this.repository.getTodos().then(todos => {
      this.todos = todos;
    });
  }

  changePriority(operation, todo) {
    if (operation === "+") {
      todo.priority += 1;
    }
    if (operation === "-") {
      if (todo.priority > 0) {
        todo.priority -= 1;
      }
    }
  }

  toggleComplete(todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(id) {
    this.repository.removeTodo(id).then(todos => {
      this.todos = todos;
    });
  }

  filterSearch(value) {
    if (value) {
      this.todos = this.todos.filter(todo => {
        return todo.text.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    } else {
      this.getTodos();
    }
  }
}
