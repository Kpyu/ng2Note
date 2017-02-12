import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Note } from '../../../models';
import { NoteService } from '../../../services/note-service';
import { ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css'],
  providers: [NoteService]
})
export class NoteEditorComponent implements OnInit {

  @Input() currentNote: Note;
  @Output() noteSaved = new EventEmitter();
  @ViewChild('childAlertModal') public childAlertModal: ModalDirective;
  constructor(private api: NoteService) { }
  ngOnInit() { }
  onSave() {
    this.api.saveNote(this.currentNote);
    this.childAlertModal.show();
    this.noteSaved.emit(true);
  }
  hideChildModal() {
    this.childAlertModal.hide();
  }
}
