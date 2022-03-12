import { Bookmark } from './bookmark.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreatBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }

  createBookmark(creatBookmarkDto: CreatBookmarkDto): Bookmark {
    const { url, description } = creatBookmarkDto;
    const bookmark: Bookmark = {
      id: uuid(),
      url,
      description,
    };
    this.bookmarks.push(bookmark);

    return bookmark;
  }
}
