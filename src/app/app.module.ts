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
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
