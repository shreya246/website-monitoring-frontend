import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DashboardComponent, TableComponent, UpdateModalComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ReactiveFormsModule
  ],
  
})
export class DashboardModule { }
