import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
/* my services */
import { StocksService } from './services/stocks.service';


/**my components */
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

/**my routes */
import { AppRoutes } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MetricComponent } from './components/metric/metric.component';
import { NodesComponent } from './components/nodes/nodes.component';
import { NodesRowComponent } from './components/nodes-row/nodes-row.component';
import { NodesDetailComponent } from './components/nodes-detail/nodes-detail.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    NavbarComponent,
    MetricComponent,
    NodesComponent,
    NodesRowComponent,
    NodesDetailComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [StocksService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [
    NodesDetailComponent,
    AlertComponent
  ],
})
export class AppModule { }
