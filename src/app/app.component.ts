import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent, AddTodoComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
}
