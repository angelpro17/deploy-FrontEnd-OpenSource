import { Component, OnInit } from '@angular/core';
import {ServiceAPIService} from "../../../services/service-api.service";
import {ServiceInterface} from "../../../interfaces/DestinationAPI";

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit {

  serviceList: ServiceInterface[] = [];

  constructor(private serviceAPI: ServiceAPIService) { }

  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this.serviceAPI.getService().subscribe({
      next: (result) => {
        if (result && result.universidades) { // Check for existence of universidades property
          this.serviceList = result.universidades;
        } else {
          console.error('Error: Missing universidades property in response');
        }
      },
      error: (err) => {
        console.error('Error fetching service data:', err);
      }
    });
  }
}
