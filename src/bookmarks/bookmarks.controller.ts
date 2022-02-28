import { BookmarksService } from './bookmarks.service';
import { Controller, Get } from '@nestjs/common';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  findAll() {
    return this.bookmarksService.findAll();
  }
}
