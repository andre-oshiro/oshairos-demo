import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-chart',
  templateUrl: './ng-chart.component.html',
  styleUrls: ['./ng-chart.component.scss']
})
export class NgChartComponent implements OnInit {
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  single = [
    {
      name: 'A',
      value: 8940000
    },
    {
      name: 'B',
      value: 5000000
    },
    {
      name: 'C',
      value: 7200000
    }
  ];

  constructor() {}

  ngOnInit() {}
}
