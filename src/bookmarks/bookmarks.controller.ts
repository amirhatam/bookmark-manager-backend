import { Bookmark } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { url } from 'inspector';
import { CreatBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  find(@Query() getBookmarkDto: GetBookmarkDto): Bookmark[] {
    if (Object.keys(getBookmarkDto).length) {
      return this.bookmarksService.find(getBookmarkDto);
    }
    return this.bookmarksService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Bookmark {
    return this.bookmarksService.findById(id);
  }

  @Post()
  creatBookmark(@Body() creatBookmarkDto: CreatBookmarkDto): Bookmark {
    return this.bookmarksService.createBookmark(creatBookmarkDto);
  }
}
