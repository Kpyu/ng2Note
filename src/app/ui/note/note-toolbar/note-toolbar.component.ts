import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../models';
@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-note-toolbar',
  templateUrl: './note-toolbar.component.html',
  styleUrls: ['./note-toolbar.component.css']
})
export class NoteToolbarComponent implements OnInit {

  @Output() newNote = new EventEmitter();
  @Output() noteFilter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onAddNote() {
    this.newNote.emit(new Note('', ''));
  }
  onFilterNotes($event) {
    const text = $event.target.value;
    this.noteFilter.emit(text);
  }
}
