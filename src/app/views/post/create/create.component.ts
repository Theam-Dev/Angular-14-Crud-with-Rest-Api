import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostApi } from 'src/app/api/post-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  post:any={};
  formInputData: any;
  submitted = false;
  constructor(private api: PostApi,
    private router: Router,
    private formBuilder: FormBuilder,) { }
  ngOnInit(): void {
    this.formInputData = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
  });
  }
  get validation() { return this.formInputData.controls; }
  onSubmit(): void {
    this.submitted = true;
    this.api.create(this.post).subscribe(() => {
      this.router.navigate(['/post']);
    })
  }
}