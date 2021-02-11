import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/display', pathMatch: 'full' },
  { path: 'home', component: AppComponent, children: [
    {
      path: 'display', 
      component: DisplayComponent,
    },  
    {
        path: 'edit', 
        component: EditComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
