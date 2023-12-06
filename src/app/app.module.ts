import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhyCreatePageComponent } from './why-create-page/why-create-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ModelsPageComponent } from './models-page/models-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModelDetailComponent } from './model-detail/model-detail.component'
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    WhyCreatePageComponent,
    ProjectsPageComponent,
    ModelsPageComponent,
    ModelDetailComponent,
    ServicesComponent,
    ContactComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
