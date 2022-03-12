import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { url } from 'inspector';
import { CreatBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  findAll(): Bookmark[] {
    return this.bookmarksService.findAll();
  }

  @Post()
  creatBookmark(@Body() creatBookmarkDto: CreatBookmarkDto): Bookmark {
    return this.bookmarksService.createBookmark(creatBookmarkDto);
  }
}
