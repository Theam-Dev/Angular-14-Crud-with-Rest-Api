import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/post/index/index.component';
import { CreateComponent } from './views/post/create/create.component';
import { EditComponent } from './views/post/edit/edit.component';

const routes: Routes = [
  {path:"",redirectTo:"post",pathMatch:"full"},
  {path:"post",component:IndexComponent},
  {path:"post/create",component:CreateComponent},
  {path:"post/edit/:id",component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
