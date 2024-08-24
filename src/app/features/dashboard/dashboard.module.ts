import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SummaryStatisticsComponent } from './components/summary-statistics/summary-statistics.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SummaryStatisticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
