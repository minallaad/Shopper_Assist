import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import {MessengerComponent} from "./messenger/messenger.component";
import {StoresComponent} from "./stores/stores.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {SharedListsComponent} from "./shared-lists/shared-lists.component";
import {LoginComponent} from "./login/login.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";

const appRoutes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'shared-list', component:SharedListsComponent } ,
  {path: 'login', component:LoginComponent },
  {path: 'list', component: ListComponent },
  {path: 'change-password', component: ChangePasswordComponent },
  {path: 'myProfile', component: MyProfileComponent },
  {path: 'Messenger', component: MessengerComponent},
  {path: 'Stores-near-me', component: StoresComponent},
  {path: 'Recipe', component: RecipesComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {  useHash: true } )],
  exports: [RouterModule]
})

export class AppRoutingModule { }



