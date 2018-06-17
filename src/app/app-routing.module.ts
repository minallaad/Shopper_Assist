import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import {MessengerComponent} from "./messenger/messenger.component";
import {StoresComponent} from "./stores/stores.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {AuthGuard} from "./services/auth.guard";
import {SharedListsComponent} from "./shared-lists/shared-lists.component";

const appRoutes: Routes = [

  // {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'shared-list', component:SharedListsComponent , canActivate: [AuthGuard]} ,
  {path: 'list', component: ListComponent,canActivate: [AuthGuard] },
  {path: 'Messenger', component: MessengerComponent,canActivate: [AuthGuard] },
  {path: 'Stores-near-me', component: StoresComponent,canActivate: [AuthGuard] },
  {path: 'Recipe', component: RecipesComponent,canActivate: [AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false } )],
  exports: [RouterModule]
})

export class AppRoutingModule { }



