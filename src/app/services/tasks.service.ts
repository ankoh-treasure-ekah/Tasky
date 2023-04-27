import { Injectable } from '@angular/core';
import { LocalStoreService } from './store/local-store-service.service';
import { ITask } from '../interfaces/task.interface';
import { TaskDetailsComponent } from '../tasks/task-details/task-details.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private store: LocalStoreService) { };

  observer = new Subject();
  public subscribers = this.observer.asObservable();

  // add task
  addTask(task:ITask) {
    // let tasks = this.store.get('Tasks');
    // if (tasks.status && tasks.data.length > 1) {
    //   tasks.data.push(task);
    //   this.store.set('Tasks', tasks);
    //   return;
    // }
    const response = this.store.set('Tasks', task);
    if(response) {
      alert('task saved successfully');
      return
    }
    alert('failed to save task');
    return;

  }

  //edit
  editTask() {}

  //delete
  deleteTask(taskId: number) {
    console.log(taskId);
    const response = this.store.get('Tasks');
    console.log(response.data);

    const previousValue = response.data;

    this.store.sessionStorage('recover' ,previousValue);

    const newTask = [...response.data.splice(0, taskId), ...response.data.splice(taskId+1, response.data.length)]
    console.log(newTask)

    const updated = this.store.update('Tasks', newTask);
    if(updated) {
      return true;
    }

    return false;
    // this.observer.next(task);

  }

  unDo() {
    const response = this.store.sessionStorageGet('recover');
    if(response) {
      console.log(response.data);
      const newResponse = this.store.update('Tasks', response.data);
      this.store.clearSStorage();
      return newResponse;
    }
    return false;
  }

  //get one
  getTaskById() {}

  //get all
  getTasks() {
    return this.store.get('Tasks');
  }

  //get by user
  getUserTask() {}

}
