import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {AppRoutingModule} from './app-routing.module';
import {KafkaService} from "./services/kafka.services";
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule , MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule,MatCardModule ,MatCheckboxModule,MatBottomSheetModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { MessengerComponent } from './messenger/messenger.component';
import { StoresComponent } from './stores/stores.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { Globals } from './globals';
import { SharedListsComponent } from './shared-lists/shared-lists.component';
import { SaveListdialogBoxComponent } from './save-listdialog-box/save-listdialog-box.component';
import { ActiveUsersListComponent } from './active-users-list/active-users-list.component';
import { ConfirmationDialogBoxComponent } from './confirmation-dialog-box/confirmation-dialog-box.component';
import { LoginComponent } from './login/login.component'
import {FlexLayoutModule} from "@angular/flex-layout";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';



export function tokenGetter(){
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    MessengerComponent,
    StoresComponent,
    RecipesComponent,
    FooterComponent,
    NavbarComponent,
    DialogBoxComponent,
    SharedListsComponent,
    SaveListdialogBoxComponent,
    ActiveUsersListComponent,
    ConfirmationDialogBoxComponent,
    LoginComponent,
    ChangePasswordComponent,
    MyProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatCardModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
      JwtModule.forRoot({
          config: {
              tokenGetter: tokenGetter
          }
      })
  ],
  providers: [
     KafkaService,
     Globals,


  ],
  entryComponents: [
      DialogBoxComponent,
      ActiveUsersListComponent,
      ConfirmationDialogBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
