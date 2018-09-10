import { Injectable } from '@angular/core';
import { CoursesListItem, CoursesListItemModel } from '../models/courses-list-item.model';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaginationListModel } from '../models/pagination-list.model';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  public coursesItemList: CoursesListItemModel[];

  constructor(private http: HttpClient) {
  }

  public getCoursesItems(countOnPage: number, pageNumber: number): Observable<PaginationListModel<CoursesListItemModel>> {
    return this.http.get(`/api/courses?start=${pageNumber}&count=${countOnPage}`)
      .pipe(
        map(res => res as PaginationListModel<CoursesListItemModel>)
      );
    // TODO: If I understand correctly, I need to create new interface for all response (DTO) from BE?
  }

  public createCourse(obj: any): CoursesListItemModel {
    const {id = 8, title, date, creationDate, topRates, duration, description} = obj;
    const newCourse = new CoursesListItem(
      id,
      title,
      date || creationDate,
      topRates,
      duration,
      description
    );
    return newCourse;
  }

  public addCourse(newCourse: CoursesListItemModel) {
    return this.http.put('/api/course', {newCourse});
  }

  getCourses(): Promise<CoursesListItemModel[]> {
    return Promise.resolve([]);
  }

  public getCourseById(id: number | string): Promise<CoursesListItemModel> {
    return this.getCourses()
      .then(courses => courses.find(elem => elem.id === +id))
      .catch(() => Promise.reject('Error in getCourseById method'));
  }

  public updateCoursesItem(course: CoursesListItemModel): Observable<object>  {
    return this.http.post('/api/course', {course});
  }

  public removeCoursesItem(id: number): Observable<object> {
    return this.http.delete(`/api/course/${id}`);
  }

  public searchCourseItem(text: string): Observable<object> {
    console.log(text);
    return this.http.get(`/api/course/search?textFragment=${encodeURIComponent(text)}`) // TODO #number do not enter in request
      .pipe(
        map(res => res as Array<CoursesListItem>)
      );
  }
}
