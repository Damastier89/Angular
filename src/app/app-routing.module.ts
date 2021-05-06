import { PostFormComponent } from './post-form/post-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component'
import { FormValidateComponent } from './form-validate/form-validate.component'
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', component: TabsComponent},
  {path: 'form', component: FormValidateComponent},
  {path: 'postForm', component: PostFormComponent},
  {path: 'post/:id', component: PostComponent}
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
