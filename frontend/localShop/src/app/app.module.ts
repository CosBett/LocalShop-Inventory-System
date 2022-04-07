import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToggleComponent } from './toggle/toggle.component';
import { RoutesComponent } from './routes/routes.component';
import { ChartsComponent } from './routes/charts/charts.component';
import { TablesComponent } from './routes/tables/tables.component';
import { FooterComponent } from './routes/footer/footer.component';
import { NavbarComponent } from './navbar-sidebar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddClerkComponent } from './add-clerk/add-clerk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    RoutesComponent,
    ChartsComponent,
    TablesComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    AddproductComponent,
    PurchaseComponent,
    SalesComponent,
    DashboardComponent,
    AddClerkComponent,
    LoginComponent,
    LandingpageComponent,
    RegisterComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserModule,
    DashboardLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
