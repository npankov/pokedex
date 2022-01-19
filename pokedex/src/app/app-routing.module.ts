import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaillePageComponent } from './pages/detaille-page/detaille-page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';

const routes: Routes = [
  { path: 'detaille-pokemon', component: DetaillePageComponent },
  { path: 'principal', component: PrincipalPageComponent },
  { path: '**', redirectTo: "principal" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
