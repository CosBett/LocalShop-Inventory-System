import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavClerkComponent } from './nav-clerk/nav-clerk.component';
import { ClerkComponent } from './clerk/clerk.component';
import { ClerkDashboardComponent } from './clerk-dashboard/clerk-dashboard.component';
import { RequestStockComponent } from './request-stock/request-stock.component';
import { PostStockComponent } from './post-stock/post-stock.component';
import { ProductClerkComponent } from './product-clerk/product-clerk.component';
import { StocksComponent } from './stocks/stocks.component';
import {ApiService} from './service/api.service';

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
    LandingpageComponent,
    RegisterComponent,
    SigninComponent,
    ClerkComponent,
    NavClerkComponent,
    ClerkDashboardComponent,
    RequestStockComponent,
    PostStockComponent,
    ProductClerkComponent,
    StocksComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatPaginatorModule ,
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
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
 
})
export class AppModule { }
