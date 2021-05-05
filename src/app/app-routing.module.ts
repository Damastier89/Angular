import { PostFormComponent } from './post-form/post-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component'
import { FormValidateComponent } from './form-validate/form-validate.component'

const routes: Routes = [
  {path: '', component: TabsComponent},
  {path: 'form', component: FormValidateComponent},
  {path: 'postForm', component: PostFormComponent}
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
