import { Injectable } from '@angular/core';

import { Note } from '../models';

@Injectable()
export class NoteService {
  constructor() { }

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
  getNoteList(params: any): Note[] {
    var note = new Note('1', '1', '1', new Date(Date.now()), '1');
    return [note];
  }
}