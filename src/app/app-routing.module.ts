import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutProductComponent } from './about-product/about-product.component';

const routes: Routes = [
  {path:'aboutProduct',component:AboutProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
