import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { StocksService, StockInterface } from '../../services/stocks.service';

interface Metric {
  used: number;
  available: number;
}

interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Output() RefreshEvent: EventEmitter<Date> = new EventEmitter<Date>();
  stocks: Array<StockInterface>;
  symbols: Array<string>;
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit() {
    this.generateData();
    this.interval = setInterval(() => { // 定时器
      this.generateData();
    }, 15000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  generateData(): void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0 };
    this.mem = { used: 0, available: 0 };
    for (let i = 1; i < 4; i++) { this.cluster1.push(this.randomNode(i)); }
    for (let i = 4; i < 7; i++) { this.cluster2.push(this.randomNode(i)); }
    this.RefreshEvent.emit(new Date());
  }

  private randomNode(i): Node {
    let node = {
      name: 'node' + i,
      cpu: { available: 16, used: this.randomInteger(0, 16) },
      mem: { available: 48, used: this.randomInteger(0, 48) }
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;
    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + 1;
  }

}
