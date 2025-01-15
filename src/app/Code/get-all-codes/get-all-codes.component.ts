import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CodeDto } from '../../Models/CodesDto';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-get-all-codes',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatButtonModule],
  templateUrl: './get-all-codes.component.html',
  styleUrl: './get-all-codes.component.css'
})
export class GetAllCodesComponent {
  _router: any;
  
  constructor(private router: Router, private http: HttpClient) {
    this._url = 'https://localhost:7143/api/Code/GetAllCodes?pageNumber=1&pageSize=10';
    this._http = http;
    this._router = router;
  }
  displayedColumns: string[] = ['code', 'result', 'actions'];
  private _url: string;
  _http: HttpClient;
  dataSource: CodeDto[]=[];
  loading = false;

  ngOnInit() 
  {
     this.getCodes();
  }
  private getCodes(){
    // this.dataSource = [
    //   { code: 'A001', result: 'Success' , id: 1},
    //   { code: 'A002', result: 'Failure' , id: 2},
    //   { code: 'A003', result: 'Pending', id: 3 },
    //   { code: 'A004', result: 'In Progress', id: 4 },
    // ];    
    this._http.get(this._url).subscribe({
      next: (response: any) => {
        this.dataSource = response.result || 'No result';
        this.loading = false;
      },
      error: () => {
        this.dataSource = [];
        this.loading = false;
      }
    });
  }
  executeAction(row: any): void {
    this.loading = true;
    debugger;
    this._http.post('https://localhost:7143/api/Code/ExecuteCode', { code: row.codeText }).subscribe({
      next: (response: any) => {
        // Update the result of the selected row with the response from the API
        row.result = response.result || 'No result';
        this.loading = false;
      },
      error: () => {
        row.result = 'Error';
        this.loading = false;
      }
    });
  }
  navigateToCreate(){
      this._router.navigate(['/create']);
  }
}