import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { SlidesComponent } from './slides/slides.component';
import { HeadingComponent } from './heading/heading.component';
import { ButtonComponent } from './button/button.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { CategoriesComponent } from './categories/categories.component';
import { Category2Component } from './category2/category2.component';
import { Category3Component } from './category3/category3.component';
import { SlideinComponent } from './slidein/slidein.component';
import { Heading2Component } from './heading2/heading2.component';
import { FinalComponent } from './final/final.component';
import { PackagesComponent } from './packages/packages.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CardsComponent,
    SlidesComponent,
    HeadingComponent,
    ButtonComponent,
    SubheadingComponent,
    CategoriesComponent,
    Category2Component,
    Category3Component,
    SlideinComponent,
    Heading2Component,
    FinalComponent,
    PackagesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
