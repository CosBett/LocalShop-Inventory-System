import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './Admin-Dashboard/addproduct/addproduct.component';
import { DashboardComponent } from './Admin-Dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './Admin-Dashboard/navbar-sidebar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { FooterComponent } from './routes/footer/footer.component';
import { SalesComponent } from './sales/sales.component';
import { AddClerkComponent } from './Admin-Dashboard/add-clerk/add-clerk.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { NavClerkComponent } from './Clerk-Dashboard/nav-clerk/nav-clerk.component';
import { ClerkDashboardComponent } from './Clerk-Dashboard/clerk-dashboard/clerk-dashboard.component';
import { ProductClerkComponent } from './Clerk-Dashboard/product-clerk/product-clerk.component';
import{RequestStockComponent} from './Clerk-Dashboard/request-stock/request-stock.component';
import { StocksComponent } from './stocks/stocks.component';
import { SuperuserComponent } from './superuser/superuser.component';
import { AddadminComponent } from './superuser/addadmin/addadmin.component';
import { StockStatusComponent } from './superuser/stock-status/stock-status.component';
import { SidenavComponent } from './superuser/sidenav/sidenav.component';
import { BarChartComponent } from './routes/bar-chart/bar-chart.component';
import { PieChartComponent } from './routes/pie-chart/pie-chart.component';
import { SuptablesComponent } from './superuser/suptables/suptables.component';
import { ProductListComponent } from './superuser/product-list/product-list.component';


import { AddstocksComponent } from './addstocks/addstocks.component';
import { ProductAdminComponent } from './Admin-Dashboard/product-admin/product-admin.component';
import {StockrequestComponent} from './Admin-Dashboard/stockrequest/stockrequest.component';
import { ClerktableComponent } from './tables/clerktable/clerktable.component';

const routes: Routes = [
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'addclerk', component: AddClerkComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'purchases', component: PurchaseComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'admin', component: DashboardComponent },
  { path: '', component: LandingpageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'nav-clerk', component: NavClerkComponent },
  {path:'clerk', component: ClerkDashboardComponent},
  {path:'product',component:ProductClerkComponent},
  {path:'stock_requests', component:RequestStockComponent},
  {path:'stocks', component:StocksComponent},
  {path:'superuser', component:SuperuserComponent},
  {path:'addadmin', component:AddadminComponent},
  {path:'suptables',component:SuptablesComponent},
  {path:'stockstatus', component:StockStatusComponent},
  {path:'sidenav', component:SidenavComponent},
  {path:'barchart', component:BarChartComponent},
  {path:'piechart', component:PieChartComponent},
  {path:'sales', component:SalesComponent},
  {path:'productlist', component:ProductListComponent},

  {path:'add_stock', component:AddstocksComponent} ,
  {path:'products_admin', component:ProductAdminComponent},
  {path:'admin/stock_requests', component:StockrequestComponent},
  {path:'clerktable', component:ClerktableComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
