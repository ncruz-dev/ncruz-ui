import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DragonBallCharacter } from '../../models/dragonball';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  private apiUrl = 'http://localhost:8080/hello/all';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<DragonBallCharacter[]> {
    return this.http.get<DragonBallCharacter[]>(this.apiUrl);
  }
}
