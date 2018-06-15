import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {AppRoutingModule} from './app-routing.module';
import {KafkaService} from "./services/kafka.services";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule , MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule,MatCardModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { MessengerComponent } from './messenger/messenger.component';
import { StoresComponent } from './stores/stores.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';
import {AuthGuard} from "./services/auth.guard";
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatCardModule
  ],
  providers: [
    KafkaService,
      AuthService,
      AuthGuard
  ],
  entryComponents: [
      DialogBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
