import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { RouterModule, Routes } from '@angular/router';
import { RealtimeUpdateComponent } from './realtime-update/realtime-update.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { MatTableModule } from '@angular/material';
//import {MatInputModule} from '@angular/material/input';
//import {ReactiveFormsModule} from '@angular/forms'
const appRoutes: Routes = [
  { path: 'noble-markets-order-book-snapshot', component: SnapshotComponent },
  { path: 'noble-markets-realtime-order-book', component: RealtimeUpdateComponent },
  { path: '',
    redirectTo: 'noble-markets-realtime-order-book',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SnapshotComponent,
    RealtimeUpdateComponent
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
  exports: [
            RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
