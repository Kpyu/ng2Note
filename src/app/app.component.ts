import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Note } from './models';
import { NoteListComponent } from './ui/note/note-list/note-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentNote: Note;
  @Output() listReload = new EventEmitter();
  @ViewChild(NoteListComponent) private noteList: NoteListComponent;

  ngOnInit() {
    this.currentNote = this.currentNote || new Note('', '');
    if (!sessionStorage.getItem('noteList')) {
      sessionStorage.setItem('noteList', JSON.stringify([new Note('标题', '内容')]));
    }
  }

  onNoteSelected(note: Note) {
    this.currentNote = note;
  }
  onNoteSaved(isSaved) {
    if (isSaved) {
      this.noteList.loadList();
    }
  }
}
