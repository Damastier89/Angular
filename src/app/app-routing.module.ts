import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component'
import { FormValidateComponent } from './form-validate/form-validate.component'
import { PostComponent } from './post/post.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HttpComponent } from './http/http.component';
import { NgClassAndStyleComponent } from './ngClassAndStyle/ngClassAndStyle.component';
import { NgForComponent } from './ngFor/ngFor.component';
import { NgIFComponent } from './ngIF/ngIF.component';
import { NgSwitchComponent } from './ngSwitch/ngSwitch.component';
import { PartComponent } from './part/part.component';
import { PipComponent } from './Pip/Pip.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ServiceModulComponent } from './service-modul/service-modul.component';
import { SwitchComponent } from './switch/switch.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'datepicker', component: DatepickerComponent },
  {path: 'form', component: FormValidateComponent},
  {path: 'post', component: PostComponent},
  {path: 'http', component: HttpComponent},
  {path: 'style', component: NgClassAndStyleComponent},
  {path: 'for', component: NgForComponent},
  {path: 'if', component: NgIFComponent},
  {path: 'ng_switch', component: NgSwitchComponent},
  {path: 'img', component: PartComponent},
  {path: 'pipe', component: PipComponent},
  {path: 'post_form', component: PostFormComponent},
  {path: 'switch', component: SwitchComponent},
  {path: 'tabs', component: TabsComponent},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
