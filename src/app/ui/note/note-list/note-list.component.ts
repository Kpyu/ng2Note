import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Note } from '../../../models'
@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  selectedNote: Note;
  @Output() noteSelected = new EventEmitter();

  constructor() {
    this.notes = JSON.parse(sessionStorage.getItem('noteList'));
    this.selectedNote = this.notes[0];
    sessionStorage.setItem('currentNote', JSON.stringify(this.selectedNote));
  }

  ngOnInit() {
  }

  onSelected(note: Note) {
    this.selectedNote = note;
    this.noteSelected.emit(note);
  }
}
