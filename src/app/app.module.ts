import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PartComponent } from './part/part.component';
import { Part1Component } from './part1/part1.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PartComponent,
    Part1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
