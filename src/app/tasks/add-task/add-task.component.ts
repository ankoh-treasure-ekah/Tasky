import { Component } from '@angular/core';
import { TaskDifficult, TaskLevel, TaskStatus } from 'src/app/constants/constants.enum';
import { ITask } from 'src/app/interfaces/task.interface';
import { LocalStoreService } from 'src/app/services/store/local-store-service.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  constructor(private taskService: TasksService) {}

  task: ITask = {
    name: '',
    description: '',
    dueDate: '',
    startDate: '',
    level: TaskLevel.NOT_STARTED,
    difficulty: TaskDifficult.STANDARD,
    status: TaskStatus.PROCESSING,
    userId: ''
  }

  saveTask() {
    // implement some form validators here
    if (this.task.name.length < 5 || this.task.description.length < 20) {
      alert('Name or description has an invalid length')
    }
    this.taskService.addTask(this.task);
  }



}
