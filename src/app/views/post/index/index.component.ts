import { Component, OnInit } from '@angular/core';
import { PostApi } from 'src/app/api/post-api';
import { Post } from 'src/app/models/post';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  resData?: Post[];
  constructor(
    private api: PostApi
  ) {}
  ngOnInit(): void {
    this.getData(); 
  }
  getData():void{
    this.api.read().subscribe((ress:any) => {
        this.resData = ress["data"];
        console.log(ress);
    });
  }
  delete(id:any): void {
      Swal.fire({  
        title: 'Are you sure want to remove?',  
        text: 'You will not be able to recover this item !',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Delete',  
        cancelButtonText: 'Cancel'  
      }).then((result) => {  
        if (result.value) {  
          this.api.delete(id).subscribe(() => {
            this.getData();
          });  
        } else if (result.dismiss === Swal.DismissReason.cancel) {  
           
        }  
      }) 
  }}