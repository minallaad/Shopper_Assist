import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {AppRoutingModule} from './app-routing.module';
import {KafkaService} from "./services/kafka.services";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { MessengerComponent } from './messenger/messenger.component';
import { StoresComponent } from './stores/stores.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';
import {AuthGuard} from "./services/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    MessengerComponent,
    StoresComponent,
    RecipesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [
    KafkaService,
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
