import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnChanges {

  @Input() data: any[] = [];
  @Output() dataChanged = new EventEmitter<any[]>();
  @Output() rowDeleted = new EventEmitter<number>();

  columns: string[] = [];
  editingRowIndex: number | null = null;
  editingData: any = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data && this.data.length > 0) {
      this.columns = Object.keys(this.data[0]);
    }
  }

  startEditingRow(index: number): void {
    this.editingRowIndex = index;
    this.editingData = { ...this.data[index] };
  }

  saveEditingRow(index: number): void {
    this.data[index] = { ...this.editingData };
    this.editingRowIndex = null;
    this.dataChanged.emit(this.data);
  }

  cancelEditingRow(): void {
    this.editingRowIndex = null;
    this.editingData = {};
  }

  deleteRow(index: number): void {
    this.data.splice(index, 1);
    this.rowDeleted.emit(index);
    this.dataChanged.emit(this.data);
  }

  addNewRow(): void {
    const newRow: any = {};
    this.columns.forEach(col => {
      newRow[col] = '';
    });
    this.data.push(newRow);
    this.dataChanged.emit(this.data);
  }
}
