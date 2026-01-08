import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  
  exportToCSV(data: any[], filename: string = 'export.csv'): void {
    if (!data || data.length === 0) {
      alert('Nenhum dado para exportar');
      return;
    }

    // Obter headers das chaves do primeiro objeto
    const headers = Object.keys(data[0]);
    
    // Criar cabeçalho CSV
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = row[header];
          // Escapar valores com vírgulas, aspas ou quebras de linha
          if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value ?? '';
        }).join(',')
      )
    ].join('\n');

    this.downloadFile(csvContent, filename, 'text/csv;charset=utf-8;');
  }

  exportToJSON(data: any[], filename: string = 'export.json'): void {
    if (!data || data.length === 0) {
      alert('Nenhum dado para exportar');
      return;
    }

    const jsonContent = JSON.stringify(data, null, 2);
    this.downloadFile(jsonContent, filename, 'application/json;charset=utf-8;');
  }

  private downloadFile(content: string, filename: string, type: string): void {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:' + type + ',encodeURIComponent(' + encodeURIComponent(content) + ')');
    element.setAttribute('download', filename);
    element.style.display = 'none';
    
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
