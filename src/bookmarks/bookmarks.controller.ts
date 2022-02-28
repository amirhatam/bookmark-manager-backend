import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { Controller, Get } from '@nestjs/common';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  findAll(): Bookmark[] {
    return this.bookmarksService.findAll();
  }
}
