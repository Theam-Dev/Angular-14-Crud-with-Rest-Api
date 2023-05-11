import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostApi } from 'src/app/api/post-api';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  post:Post={
    title:"",
    body:""
  };
  formInputData: any;
  submitted = false;
  
  constructor(private api: PostApi,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,) { }
  ngOnInit(): void {
    this.formInputData = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
     });
    this.id = this.route.snapshot.paramMap.get("id");
    this.api.edit(this.id).subscribe((res:any) => {
      this.post = res['data'];
    });
  }
  get validation() { return this.formInputData.controls; }
  onSubmit(): void {
    this.submitted = true;
    this.api.update(this.post).subscribe(() => {
      this.router.navigate(['/post']);
    })
  }
}