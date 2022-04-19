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
import { RoutesComponent } from './routes/routes.component';
import { FooterComponent } from './routes/footer/footer.component';
import { NavbarComponent } from './Admin-Dashboard/navbar-sidebar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './Admin-Dashboard/addproduct/addproduct.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { DashboardComponent } from './Admin-Dashboard/dashboard/dashboard.component';
import { AddClerkComponent } from './Admin-Dashboard/add-clerk/add-clerk.component';
import { FormsModule,NgForm, ReactiveFormsModule } from '@angular/forms';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { NavClerkComponent } from './Clerk-Dashboard/nav-clerk/nav-clerk.component';
import { ClerkDashboardComponent } from './Clerk-Dashboard/clerk-dashboard/clerk-dashboard.component';
import { RequestStockComponent } from './Clerk-Dashboard/request-stock/request-stock.component';
import { ProductClerkComponent } from './Clerk-Dashboard/product-clerk/product-clerk.component';
import { StocksComponent } from './stocks/stocks.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { SuperuserComponent } from './superuser/superuser.component';
import { SuptablesComponent } from './superuser/suptables/suptables.component';
import { AddadminComponent } from './superuser/addadmin/addadmin.component';
import { StockStatusComponent } from './superuser/stock-status/stock-status.component';
import { SidenavComponent } from './superuser/sidenav/sidenav.component';
import { BarChartComponent } from './routes/bar-chart/bar-chart.component';
import { PieChartComponent } from './routes/pie-chart/pie-chart.component';
import { PurchasesComponent } from './superuser/purchases/purchases.component';
import { ProductListComponent } from './superuser/product-list/product-list.component';
import { ChartsModule } from "@carbon/charts-angular";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AddstocksComponent } from './addstocks/addstocks.component';
import { ProductAdminComponent } from './Admin-Dashboard/product-admin/product-admin.component';
import { RequesttableComponent } from './tables/requesttable/requesttable.component';
import { StockrequestComponent } from './Admin-Dashboard/stockrequest/stockrequest.component';
import { ClerktableComponent } from './tables/clerktable/clerktable.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
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
    NavClerkComponent,
    ClerkDashboardComponent,
    RequestStockComponent,
    ProductClerkComponent,
    StocksComponent,
    SuperuserComponent,
    SuptablesComponent,
    AddadminComponent,
    StockStatusComponent,
    SidenavComponent,
    BarChartComponent,
    PieChartComponent,
    PurchasesComponent,
    ProductListComponent,
    AddstocksComponent,
    ProductAdminComponent,
    RequesttableComponent,
    StockrequestComponent,
    ClerktableComponent,
  
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
    ReactiveFormsModule,
    NgApexchartsModule,
    ChartsModule,
    Ng2GoogleChartsModule,
    FormsModule,
    
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
 
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

