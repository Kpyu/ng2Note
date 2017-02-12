import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Note } from '../../../models';
import { NoteService } from '../../../services/note-service';
import { ModalDirective } from 'ng2-bootstrap/modal';
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
  delId: string;
  @Output() noteSelected = new EventEmitter();
  @ViewChild('childModal') public childModal: ModalDirective;
  constructor(private api: NoteService) { }

  ngOnInit() {
    this.loadList();
  }
  public loadList() {
    this.notes = this.api.getNoteList();
    this.selectedNote = this.notes[0] || new Note('', '');
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
  delNote(note, $event) {
    $event.stopPropagation();
    // debugger
    this.delId = note.id;
    this.childModal.show();

  }
  hideChildModal() {
    this.childModal.hide();
  }
  doDelNote() {
    this.api.deleteNote(this.delId);
    this.loadList();
    this.childModal.hide();
  }
  onNoteReload(isReload) {
    if (isReload) {
      this.loadList();
    }
  }
}
