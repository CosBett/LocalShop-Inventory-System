import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar-sidebar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ChartsComponent } from './routes/charts/charts.component';
import { FooterComponent } from './routes/footer/footer.component';
import { TablesComponent } from './routes/tables/tables.component';
import { SalesComponent } from './sales/sales.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AddClerkComponent } from './add-clerk/add-clerk.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';
import { ClerkComponent } from './clerk/clerk.component';
import { SigninComponent } from './signin/signin.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NavClerkComponent } from './nav-clerk/nav-clerk.component';
import { ClerkDashboardComponent } from './clerk-dashboard/clerk-dashboard.component';
import { ProductClerkComponent } from './product-clerk/product-clerk.component';
import{RequestStockComponent} from './request-stock/request-stock.component';
import {PostStockComponent} from './post-stock/post-stock.component';
import { StocksComponent } from './stocks/stocks.component';



const routes: Routes = [
  { path: 'static', component: ToggleComponent, pathMatch: 'full' },
  { path: 'tables', component: TablesComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'addclerk', component: AddClerkComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'purchases', component: PurchaseComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'admin', component: DashboardComponent },
  { path: '', component: LandingpageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'table-stock', component: ClerkComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'nav-clerk', component: NavClerkComponent },
  {path:'clerk', component: ClerkDashboardComponent},
  {path:'product',component:ProductClerkComponent},
  {path:'stock_requests', component:RequestStockComponent},
  {path:'post_stock', component:PostStockComponent},
  {path:'stocks', component:StocksComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
