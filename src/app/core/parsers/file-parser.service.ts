import { Injectable } from '@angular/core';

interface ParseResult {
  type: string;
  data: any[] | any;
}

@Injectable({
  providedIn: 'root'
})
export class FileParserService {
  parse(content: string): ParseResult {
    // Detectar tipo de arquivo
    let type = 'unknown';
    let data: any[] | any = [];

    try {
      // Tentar fazer parse como JSON
      const parsed = JSON.parse(content);
      type = 'json';
      data = parsed;
    } catch {
      // Se não for JSON, tentar CSV
      if (content.includes(',') || content.includes(';')) {
        type = 'csv';
        data = this.parseCSV(content);
      } else {
        // Fallback para texto plano
        type = 'text';
        data = content;
      }
    }

    return { type, data };
  }

  private parseCSV(content: string): any[] {
    const lines = content.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());
      const obj: any = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });
      return obj;
    });
  }
}
