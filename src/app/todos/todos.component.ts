import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Todo } from './models/todos';
// import { TodosService } from './services/todos.service';
import { todoProvider } from './todo.factory';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  // todoList: Todo[] = [];
  // subscription: Subscription;
  todoList$: Observable<Todo[]>;
  // constructor(private todosService: TodosService) { }
  constructor(private route: ActivatedRoute,
    private todosService: TodosService) {

     }

  ngOnInit(): void {
    // this.route.data.subscribe((data) => console.log(data['todoData']));
    this.todoList$ = this.route.data.pipe(
      pluck('todoData'));
    // this.todoList$ = this.todosService.getTodos().pipe(shareReplay(1));
    // this.subscription = this.todosService.getTodos().subscribe((data) => this.todoList = data);
    // const data =  this.todosService.getTodos();
  }

  updateTask() {
    const task: Todo = {
      id: 1,
      completed: true,
      title: 'Test update',
      userId: 1
    };
    this.todosService.updateTodo(task).subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    //   if (this.subscription) {
    //     this.subscription.unsubscribe();
    //   }
  }

}
