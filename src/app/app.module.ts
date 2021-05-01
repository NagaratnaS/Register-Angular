import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { GetallComponentComponent } from './getall-component/getall-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';


const appRoutes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'update',
    component: UpdateFormComponent
  },
  {
    path: 'get',
    component: GetallComponentComponent
  },
  {
    path: 'delete',
    component: DeleteComponentComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterFormComponent,
    UpdateFormComponent,
    GetallComponentComponent,
    DeleteComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
