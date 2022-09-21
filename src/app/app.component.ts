import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Todos: Todo[] = [];
  title = 'Minhas tarefas';

  constructor() {
    this.Todos.push(new Todo(1,"passear com os gatinhos",false));
    this.Todos.push(new Todo(2,"ir ao mercado",false));
    this.Todos.push(new Todo(3,"dar comida pros gatinhos",false));
  }



  }
