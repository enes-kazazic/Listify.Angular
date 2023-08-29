import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotesServiceService {
  constructor(http: HttpClient) {}

  getAll(): void {}

  add(): void {}
}
