import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
baseUrl = "http://localhost:8000/api/";
}