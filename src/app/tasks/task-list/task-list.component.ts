import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskDifficult, TaskLevel, TaskStatus } from 'src/app/constants/constants.enum';
import { ITask } from 'src/app/interfaces/task.interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges {

  constructor(private route: Router ,private taskService: TasksService, private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef) {

    

    // this.activatedRoute.queryParams.subscribe((queryParams) => {
    //   console.log(queryParams);
    //   // console.log(task);
    // })

  }

  currentTask!: number;

  @Input() tasks: ITask[] = [
    // {
    //   name: "Teach Javascript",
    //   description: 'js master class',
    //   userId: '1',
    //   status: TaskStatus.PAUSED,
    //   startDate: new Date(Date.now()),
    //   dueDate: new Date("12/04/2023"),
    //   level: TaskLevel.PROGRESS,
    //   difficulty: TaskDifficult.MEDIUM
    // },
    // {
    //   name: "Teach Angular",
    //   description: 'Angular master class',
    //   userId: '2',
    //   status: TaskStatus.SUCCESS,
    //   startDate: new Date(Date.now()),
    //   dueDate: new Date("12/04/2023"),
    //   level: TaskLevel.PROGRESS,
    //   difficulty: TaskDifficult.HIGH
    // }
  ]

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {

      if(data['id']) {

        const updated = this.taskService.deleteTask(data['id']);
        if(updated) {
          alert('task deleted successfully');
          return
        }
  
        alert('could not delete task');
      }

    })

    let allTasks = this.taskService.getTasks();
    console.log(allTasks.data);
    this.tasks = [...this.tasks, ...allTasks.data];
    this.cd.detectChanges();
    console.log(this.tasks);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  editTask(task: ITask) {
    console.log(this.tasks.indexOf(task));
    this.currentTask = this.tasks.indexOf(task)
    console.log(task);

    this.route.navigate(['/dashboard/tasks/task-detail', [JSON.stringify(task), this.currentTask]])
    
  }


}
