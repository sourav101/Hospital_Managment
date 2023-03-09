import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-appointments',
  templateUrl: './view-all-appointments.component.html',
  styleUrls: ['./view-all-appointments.component.css']
})
export class ViewAllAppointmentsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onNavigate(){
    this.router.navigate(['bookappointment']);
}
}
