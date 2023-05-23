import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environment";

@Component({
  selector: 'app-data',
  template: '<div>{{ data | json }}</div>',
  providers: [HttpClient],
})
export class DataComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((res) => {
      this.data = JSON.parse(res);
    });
  }
}
