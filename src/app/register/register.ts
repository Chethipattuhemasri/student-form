import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  student = {
    name: '',
    email: '',
    course: ''
  };

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:3000/register', this.student)
      .subscribe(res => {
        alert('Student Registered Successfully');
      });
  }
}