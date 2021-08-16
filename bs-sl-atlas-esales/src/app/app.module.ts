import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app.routing.module';
import { AppComponent } from './app.component';
import {CustomMaterialModule} from "./core/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { LaunchComponent } from './launch/launch.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { BagComponent } from './bag/bag.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { OptionComponent } from './option/option.component';
import { CategoryComponent } from './category/category.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { MiscellanyComponent } from './miscellany/miscellany.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaunchComponent,
    BannerComponent,
    ProductComponent,
    SearchComponent,
    BagComponent,
    AccountComponent,
    ContactComponent,
    OptionComponent,
    InformationComponent,
    CategoryComponent,
    FooterComponent,
    MiscellanyComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
