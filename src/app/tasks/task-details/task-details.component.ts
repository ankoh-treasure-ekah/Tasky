import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ITask } from 'src/app/interfaces/task.interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {

  observer = new Subject();
  public subscribers = this.observer.asObservable();


  task!: ITask;
  taskId!: number;

  username: string = '';
  userIn: boolean = false;

  constructor(private route: Router ,private activatedRoute: ActivatedRoute, private taskService: TasksService){
    this.activatedRoute.params.subscribe((data) => {
      this.task = JSON.parse(data[0]) as any;
      this.taskId = JSON.parse(data[1])

      this.username = data[2].split(',')[0];
      this.userIn = true;

      console.log(data);
    })
  }

  deleteTask(e: any) {
    // this.observer.next(this.task);
    
    // this.taskService.deleteTask(this.taskId);
    this.route.navigate(['/dashboard/tasks', {
        task: JSON.stringify(this.task),
        id: this.taskId
      }
    ])

  } 


}
