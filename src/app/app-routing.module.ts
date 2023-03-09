import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewAllAppointmentsComponent } from './view-all-appointments/view-all-appointments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookappointment', component:BookappointmentComponent  },
  { path: 'viewallappointments', component:ViewAllAppointmentsComponent  },
  { path: 'about', component:  AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
