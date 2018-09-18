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
  constructor(private http: HttpClient) {
  }

  public getCoursesItems(countOnPage: number, pageNumber: number): Observable<PaginationListModel<CoursesListItemModel>> {
    return this.http.get<PaginationListModel<CoursesListItemModel>>(`/api/courses?start=${pageNumber}&count=${countOnPage}`);
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

  public addCourse(newCourse: CoursesListItemModel): Observable<CoursesListItemModel> {
    return this.http.put<CoursesListItemModel>('/api/courses', {newCourse});
  }

  public getCourseById(courseId: number): Observable<CoursesListItemModel> {
    return this.http.get<CoursesListItemModel>(`/api/courses/${courseId}`);
  }

  public updateCoursesItem(course: CoursesListItemModel): Observable<CoursesListItemModel>  {
    return this.http.post<CoursesListItemModel>('/api/courses', {course});
  }

  public removeCoursesItem(id: number): Observable<object> {
    return this.http.delete(`/api/courses/${id}`);
  }

  public searchCourseItem(text: string): Observable<CoursesListItemModel[]> {
    console.log(text);
    return this.http.get<CoursesListItemModel[]>(`/api/courses/search?textFragment=${encodeURIComponent(text)}`);
  }
}
