import { Bookmark } from './bookmark.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreatBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }

  find(getBookmarkDto: GetBookmarkDto): Bookmark[] {
    let bookmarks = this.findAll();
    const { url, description } = getBookmarkDto;
    if (url) {
      bookmarks = bookmarks.filter((bookmarks) =>
        bookmarks.url.toLowerCase().includes(url),
      );
    }
    if (description) {
      bookmarks = bookmarks.filter((bookmarks) =>
        bookmarks.description.toLowerCase().includes(description),
      );
    }
    return bookmarks;
  }

  findById(id: string): Bookmark {
    return this.bookmarks.find((bookmark) => bookmark.id == id);
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

  deleteBookmark(id: string): Bookmark[] {
    const bookmarkDeleted = this.bookmarks.filter(
      (bookmark) => bookmark.id == id,
    );
    this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
    return bookmarkDeleted;
  }

  updateBookmarkDescription(id: string, description: string): Bookmark {
    const bookmark = this.findById(id);
    bookmark.description = description;
    return bookmark;
  }
}
