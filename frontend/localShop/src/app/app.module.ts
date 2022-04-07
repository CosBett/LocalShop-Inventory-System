import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';
import{MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule } from '@angular/material/sidenav';
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserModule, 
    DashboardLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
