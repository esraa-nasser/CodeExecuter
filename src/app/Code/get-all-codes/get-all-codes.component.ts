import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { get } from 'http';

@Component({
  selector: 'app-get-all-codes',
  standalone: true,
  imports: [],
  templateUrl: './get-all-codes.component.html',
  styleUrl: './get-all-codes.component.css'
})
export class GetAllCodesComponent {
  
  constructor(private httpClient: HttpClient) {
    this._url = 'https://localhost:7143/api/Code/GetAllCodes?pageNumber=1&pageSize=10';
    this._http = httpClient;

  }
  private _url: string;
  _http: HttpClient;
  codes: any;
  ngOnInit() 
  {
     this.getCodes();
  }
  private getCodes(){
    this._http.get(this._url).subscribe((data) => {
      console.log(data);
      this.codes  = data;
    });
  }}