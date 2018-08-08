import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { IsAuthenticatedGuard } from '../guards/isAuthenticatedGuard';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'courses/new',
    component: CourseAddComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'courses/:id',
    component: CourseAddComponent,
    canActivate: [IsAuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesListRoutingModule {}
