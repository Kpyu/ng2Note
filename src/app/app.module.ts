import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoteModule } from './ui/note';
import { AppComponent } from './app.component';
import { NoteService } from './services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
