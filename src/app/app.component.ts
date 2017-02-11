import { Component, OnInit } from '@angular/core';
import { Note } from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentNote: Note;

  ngOnInit() {
    sessionStorage.setItem('noteList', JSON.stringify([new Note('标题', '内容')]));
  }

  onNoteSelected(note: Note) {
    this.currentNote = note;
  }
}
