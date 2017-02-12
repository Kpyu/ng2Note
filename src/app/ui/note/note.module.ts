import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ng2-bootstrap';

import { NoteService } from '../../services/note-service';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteToolbarComponent } from './note-toolbar/note-toolbar.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { filterTextPipe } from '../pipes/filterText.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, ModalModule.forRoot()],
  exports: [
    NoteListComponent,
    NoteEditComponent,
    NoteToolbarComponent,
    NoteEditorComponent],
  declarations: [
    NoteListComponent,
    NoteEditComponent,
    NoteToolbarComponent,
    NoteEditorComponent,
    filterTextPipe
  ],
  providers: [NoteService]
})
export class NoteModule {

}
