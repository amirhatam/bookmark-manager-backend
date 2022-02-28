import { Bookmark } from './bookmark.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [
    {
      id: uuid(),
      url: 'https://www.google.com/',
      description: 'Google',
    },
  ];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }
}
