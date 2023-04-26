import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { VariableComponent } from './variable/variable.component';
import { FormsModule } from '@angular/forms';
import { LocalStoreService } from './services/store/local-store-service.service';
import { UsersService } from './services/users/users.service';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthserviceService } from './services/authservice.service';
import { AuthguardService } from './services/authguard.service';
import { GuardtemplateComponent } from './guardtemplate/guardtemplate.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    VariableComponent,
    RoomsComponent,
    RoomsListComponent,
    RegisterComponent,
    LoginComponent,
    TaskListComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskDetailsComponent,
    DashboardComponent,
    GuardtemplateComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LocalStoreService,
    AuthserviceService,
    UsersService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
