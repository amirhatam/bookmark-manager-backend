import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarksService {
  private bookmarks = [
    {
      id: 1,
      url: 'https://www.google.com/',
      description: 'Google',
    },
  ];

  findAll() {
    return this.bookmarks;
  }
}
