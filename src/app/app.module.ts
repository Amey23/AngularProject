import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { routingComponents, TechModule } from './tech/tech.module';
import { TabledirDirective } from './tabledir.directive';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { AngularComponent } from './angular/angular.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { TechnologyComponent } from './technology/technology.component';
import { WebComponent } from './web/web.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { ReviewComponent } from './review/review.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { GatewayComponent } from './gateway/gateway.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    SearchPipe,
    SortPipe,
    routingComponents,
    TabledirDirective,
    HomeComponent,
    JavaComponent,
    AngularComponent,
    AngularFormComponent,
    TechnologyComponent,
    WebComponent,
    ModelFormComponent,
    ReviewComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    GatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TechModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
