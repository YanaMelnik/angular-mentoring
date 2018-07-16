import { inject } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { CoursesListItem } from '../courses-list/models/courses-list-item.model';

describe('UtilsService', () => {
  let sut: UtilsService;
  beforeEach(() => {
    sut = new UtilsService();
  });

  it('should be created', inject([UtilsService], (service: UtilsService) => {
    expect(service).toBeTruthy();
  }));

  describe('#parseDateString', () => {
    let item: CoursesListItem;
    let itemDateMs: number;
    beforeEach(() => {
      item = new CoursesListItem(1,
        'Video Course #1',
        new Date(2018, 5, 10),
        true,
        28,
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
      itemDateMs = 1528578000000;

      spyOn(Date, 'parse').and.callThrough();
    });
    it('should parse date string', () => {
      sut.parseDateString(item);
      expect(Date.parse).toHaveBeenCalledWith(item.creationDate.toString());
    });

    it('should return date in ms', () => {
      expect(sut.parseDateString(item)).toBe(itemDateMs);
    });
  });
});
