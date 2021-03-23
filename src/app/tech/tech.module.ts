import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { EmployeeComponent } from '../employee/employee.component';
import { HomeComponent } from '../home/home.component';
import { JavaComponent } from '../java/java.component';
import { AngularComponent } from '../angular/angular.component';
import { AngularFormComponent } from '../angular-form/angular-form.component';
import { TechnologyComponent } from '../technology/technology.component';
import { WebComponent } from '../web/web.component';
import { ModelFormComponent } from '../model-form/model-form.component';
import { ReviewComponent } from '../review/review.component';
import { LoginComponent } from '../login/login.component';
import { GatewayComponent } from '../gateway/gateway.component';
import { HeaderComponent } from '../header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Product', component: ProductComponent },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'ModelForm', component: ModelFormComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'Form', component: AngularFormComponent },
  { path: 'Review', component: ReviewComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Gateway', component: GatewayComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Tech', component: TechnologyComponent,
    children: [
      { path: 'Java', component: JavaComponent },
      { path: 'Web', component: WebComponent },
      { path: 'Angular', component: AngularComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TechModule { }
export const routingComponents = [WebComponent, ReviewComponent, LoginComponent, ProductComponent, EmployeeComponent, HomeComponent, JavaComponent, AngularComponent, AngularFormComponent, TechnologyComponent, GatewayComponent]
