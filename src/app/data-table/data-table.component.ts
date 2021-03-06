import { Component, OnInit, ViewChild } from '@angular/core';
import { DeltaDataSource } from './delta-datasource';
import { SignalKService } from "../signal-k.service";

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  dataSource: DeltaDataSource;

  // Columns displayed in the table. Columns IDs can be added, removed, or reordered. 
  displayedColumns = ['timestamp','source', 'values'];

  constructor(private signalKService:SignalKService) {
  }
  
  ngOnInit() {
    this.dataSource = new DeltaDataSource(this.signalKService);
  }
}
