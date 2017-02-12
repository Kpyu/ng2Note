import { Injectable } from '@angular/core';

import { Note } from '../models';


function removeByItem(arr: [any], item: any) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item.id) {
      arr.splice(i, 1);
      return;
    }
  }
}
function removeByItemId(arr: [any], id: any) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === id) {
      arr.splice(i, 1);
      return;
    }
  }
}

@Injectable()
export class NoteService {
  private db: any;
  constructor() {
    this.db = sessionStorage;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  /**
  * 查询note列表
  * 
  * @param {*} params
  * @returns
  * 
  * @memberOf NoteService
  */
  getNoteList(): Note[] {
    console.log('获取notes列表');
    const notes = JSON.parse(this.db.getItem('noteList'));
    return notes;
  }
  /**
   * 保存笔记
   */
  saveNote(note: Note): void {
    let notes = JSON.parse(this.db.getItem('noteList'));
    let count = 0;
    notes = notes.map(function (item) {
      if (item.id === note.id) {
        count = 1;
        return note;
      }
      return item;
    });
    if (count === 0) {
      notes.unshift(note);
    }
    this.saveNotes(notes);
  }
  /**
   *  更新 sessionStorage中的数据
   * @param {any} notes
   * 
   * @memberOf NoteService
   */
  saveNotes(notes): void {
    this.db.setItem('noteList', JSON.stringify(notes));
  }
  /**
   * 删除笔记
   * @param {string} noteId
   * @memberOf NoteService
   */
  deleteNote(noteId: string): void {
    const notes = JSON.parse(this.db.getItem('noteList'));
    removeByItemId(notes, noteId);
    this.saveNotes(notes);
  }
  /**
   * 搜索笔记
   * @param {string} params
   * @returns {Note[]}
   * @memberOf NoteService
   */
  searchNotes(text: string): Note[] {
    console.log('搜索notes...');
    let notes = JSON.parse(this.db.getItem('noteList'));
    notes = notes.filter((item) => {
      return (text && item.title.indexOf(text) >= 0) || !text;
    });
    // if (notes.length && text) {
    //   notes = notes.map((item) => {
    //     item.title = item.title.replace(text, `<strong class="filter-text">${text}</span>`);
    //     return item;
    //   });
    // }
    return notes;
  }
}
