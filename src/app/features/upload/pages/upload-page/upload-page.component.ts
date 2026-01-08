import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicTableComponent } from '../../../../shared/components/dynamic-table/dynamic-table.component';
import { FileUploadComponent } from '../../components/file-upload/file-upload.component';
import { FileParserService } from '../../../../core/parsers/file-parser.service';
import { ExportService } from '../../../../core/services/export.service';

@Component({
  selector: 'app-upload-page',
  standalone: true,
  imports: [CommonModule, FormsModule, FileUploadComponent, DynamicTableComponent],
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent {
  parser = inject(FileParserService);
  exportService = inject(ExportService);
  
  rawData: string | null = null;
  fileType: string | null = null;
  parsedData: any[] = [];
  originalFilename: string = 'export';

  onFileLoaded(content: string) {
    const result = this.parser.parse(content);
    this.fileType = result.type;

    if (Array.isArray(result.data)) {
      this.parsedData = result.data;
    } else {
      this.parsedData = [result.data];
    }
  }

  onDataChanged(updatedData: any[]) {
    this.parsedData = updatedData;
  }

  exportAsCSV() {
    const filename = `${this.originalFilename || 'export'}_${new Date().getTime()}.csv`;
    this.exportService.exportToCSV(this.parsedData, filename);
  }

  exportAsJSON() {
    const filename = `${this.originalFilename || 'export'}_${new Date().getTime()}.json`;
    this.exportService.exportToJSON(this.parsedData, filename);
  }

  resetData() {
    this.parsedData = [];
    this.fileType = null;
    this.rawData = null;
  }
}
