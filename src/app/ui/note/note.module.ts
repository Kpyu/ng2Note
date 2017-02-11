import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoteService } from '../../services';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteToolbarComponent } from './note-toolbar/note-toolbar.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';


@NgModule({
  imports: [BrowserModule],
  exports: [
    NoteListComponent,
    NoteEditComponent,
    NoteToolbarComponent,
    NoteEditorComponent],
  declarations: [
    NoteListComponent,
    NoteEditComponent,
    NoteToolbarComponent,
    NoteEditorComponent
  ],
  providers: [NoteService]
})
export class NoteModule {

}
