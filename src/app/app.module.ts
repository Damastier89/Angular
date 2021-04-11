import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PartComponent } from './part/part.component';
import { NgIFComponent } from './ngIF/ngIF.component';
import { NgSwitchComponent } from './ngSwitch/ngSwitch.component';
import { NgForComponent } from './ngFor/ngFor.component';
import { NgClassAndStyleComponent } from './ngClassAndStyle/ngClassAndStyle.component';
import { PipComponent } from './Pip/Pip.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CountService } from './service/count.service';
import { ServiceModulComponent } from './service-modul/service-modul.component';

@NgModule({
  declarations: [		
    AppComponent,
    PostComponent,
    PartComponent,
      NgIFComponent,
      NgSwitchComponent,
      NgForComponent,
      NgClassAndStyleComponent,
      PipComponent,
      UsersComponent,
      DatepickerComponent,
      ServiceModulComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
