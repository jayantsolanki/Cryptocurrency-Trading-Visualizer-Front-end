import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { RouterModule, Routes } from '@angular/router';
//import {ReactiveFormsModule} from '@angular/forms'
const appRoutes: Routes = [
  { path: 'noble-markets-order-book-snapshot', component: SnapshotComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SnapshotComponent
  ],
  imports: [
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
