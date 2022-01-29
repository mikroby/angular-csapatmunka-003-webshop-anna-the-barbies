import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() row: Product = new Product();

  @Output() selectClick: EventEmitter<Product> = new EventEmitter();
  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSelectClicked(): void {
    this.selectClick.emit(this.row)
  }
  onUpdateClicked(): void {
    this.updateClick.emit(this.row)
  }
  onDeleteClicked(): void {
    this.deleteClick.emit(this.row)
  }

}
