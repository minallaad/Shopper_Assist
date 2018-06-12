import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import {MessengerComponent} from "./messenger/messenger.component";
import {StoresComponent} from "./stores/stores.component";
import {RecipesComponent} from "./recipes/recipes.component";


const appRoutes: Routes = [

  // {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListComponent },
  {path: 'Messenger', component: MessengerComponent },
  {path: 'Stores-near-me', component: StoresComponent },
  {path: 'Recipe', component: RecipesComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false } )],
  exports: [RouterModule]
})

export class AppRoutingModule { }



