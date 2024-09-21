import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'dashboard',
        outlet: 'router-content',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'categories',
        outlet: 'router-content',
        loadChildren: () =>
          import('../categories/categories.module').then((m) => m.CategoriesModule),
      },
      {
        path: 'tags',
        outlet: 'router-content',
        loadChildren: () => import('../tags/tags.module').then((m) => m.TagsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
