import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ClerkComponent } from './clerk/clerk.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ChartsComponent } from './routes/charts/charts.component';
import { FooterComponent } from './routes/footer/footer.component';
import { TablesComponent } from './routes/tables/tables.component';
import { SalesComponent } from './sales/sales.component';
import { ToggleComponent } from './toggle/toggle.component';


const routes: Routes = [
 {path:'static', component:ToggleComponent, pathMatch:'full'},
 {path:'tables', component:TablesComponent},
 {path:'footer', component:FooterComponent},
 {path:'navbar', component:NavbarComponent},
 {path:'charts', component:ChartsComponent},
 {path:'products', component:ProductsComponent},
 {path:'clerk', component:ClerkComponent},
 {path:'addproduct', component:AddproductComponent},
 {path:'purchases', component:ProductsComponent},
 {path:'sales',component:SalesComponent},
 {path:'dashboard', component:DashboardComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
