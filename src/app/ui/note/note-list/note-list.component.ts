import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../models';
import { NoteService } from '../../../services/note-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers: [NoteService]
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  selectedNote: Note;
  filterText: string;
  @Output() noteSelected = new EventEmitter();

  constructor(private api: NoteService) { }

  ngOnInit() {
    this.loadList();
  }
  loadList() {
    this.notes = this.api.getNoteList();
    this.selectedNote = this.notes[0];
    this.noteSelected.emit(this.selectedNote);
  }
  onSelected(note: Note) {
    this.selectedNote = note;
    this.noteSelected.emit(note);
  }
  onAddNote(note: Note) {
    this.notes.unshift(note);
    this.noteSelected.emit(note);
  }
  onFilterNotes(filterText) {
    this.filterText = filterText;
    this.notes = this.api.searchNotes(filterText) || [];
  }
}
