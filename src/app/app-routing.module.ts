import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component'
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AddUserComponent } from './components/add-user/add-user.component'
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent},
  { path: 'add_task', component: AddTaskComponent },  
  { path: 'users', component: UserListComponent },
  { path: 'add_user', component: AddUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
