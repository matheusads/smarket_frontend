import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {
  currentTask = null;
  message = '';
  status_map = {'C': 'Created', 'P': 'In Progress', 'D': 'Done'};
  updated = false;
  deleted = false;
  new_status = '';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
  }

  getTask(id): void {
    this.taskService.get(id)
      .subscribe(
        data => {
          this.currentTask = data;
        },
        error => {
          console.log(error);
        });
  }

  updateTask(): void {
    this.currentTask.status = this.new_status;
    this.taskService.update(this.currentTask.id, this.currentTask)
      .subscribe(
        response => {
          this.updated = true;
          this.message = 'The task was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTask(): void {
    this.taskService.delete(this.currentTask.id)
      .subscribe(
        response => {
          this.deleted = true;
          this.message = 'The task was deleted!';
          this.router.navigate(['/tasks']);
        },
        error => {
          console.log(error);
        });
  }

}
