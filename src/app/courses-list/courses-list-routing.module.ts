import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { IsAuthenticatedGuard } from '../guards/isAuthenticatedGuard';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [IsAuthenticatedGuard],
    data: {
      breadcrumb: 'Courses'
    },
    children: [
      {
        path: 'new',
        component: CourseAddComponent,
        data: {
          breadcrumb: 'New'
        }
      },
      {
        path: ':id',
        component: CourseAddComponent,
        data: {
          breadcrumb: 'Id'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesListRoutingModule {}
