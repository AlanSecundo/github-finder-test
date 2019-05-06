import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitrepoService } from './repo-service/gitrepo.service';
import { ListRepositoriesComponent } from './list-repositories/list-repositories.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './home/components/search/search.component';
import { ModalComponent } from './list-repositories/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRepositoriesComponent,
    HomeComponent,
    SearchComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [GitrepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
