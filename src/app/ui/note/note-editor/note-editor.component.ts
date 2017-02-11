import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../models';
import { NoteService } from '../../../services';
@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css'],
  providers: [NoteService]
})
export class NoteEditorComponent implements OnInit {

  @Input() currentNote: Note;

  constructor(private api: NoteService) { }

  ngOnInit() {}
  onSave() {
    this.api.saveNote(this.currentNote);
  }
}
