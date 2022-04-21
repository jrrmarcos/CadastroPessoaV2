import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { PeopleCrudComponent } from './views/people-crud/people-crud.component'
import { PeopleCreateComponent } from './components/people/people-create/people-create.component';
import { PeopleUpdateComponent } from './components/people/people-update/people-update.component';
import { PeopleDeleteComponent } from './components/people/people-delete/people-delete.component';
import { PeopleViewComponent } from './components/people/people-view/people-view.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "people",
    component: PeopleCrudComponent
  },
  {
    path: "people/create",
    component: PeopleCreateComponent
  },
  {
    path: "people/update/:id",
    component: PeopleUpdateComponent
  },
  {
    path: "people/delete/:id",
    component: PeopleDeleteComponent
  },
  {
    path: "people/view/:id",
    component: PeopleViewComponent
  },
{
  path: '**',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
