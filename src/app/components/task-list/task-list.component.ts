import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks: any;
  currentTask = null;
  currentIndex = -1;
  status = {'C': 'Created',
            'P': 'In Progress',
            'D': 'Done'};
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.retrieveTask();
  }

  retrieveTask(): void {
    this.taskService.getAll()
      .subscribe(
        data => {
          this.tasks = data;
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTask();
    this.currentTask = null;
    this.currentIndex = -1;
  }

  setActiveTask(task, index): void {
    this.currentTask = task;
    this.currentIndex = index;
  }

}
