import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { IsAuthenticatedGuard } from '../guards/isAuthenticatedGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    canActivate: [IsAuthenticatedGuard],
    data: {
      breadcrumb: 'Courses'
    },
    children: [
      {
        path: '',
        component: CoursesListComponent,
      },
      {
        path: 'new',
        component: CourseFormComponent,
        data: {
          breadcrumb: 'New'
        }
      },
      {
        path: ':id',
        component: CourseFormComponent,
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
