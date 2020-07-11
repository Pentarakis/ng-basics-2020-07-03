import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "./model/character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly baseUrl = 'http://localhost:3000/characters';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.baseUrl);
  }

  getById(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/${id}`);
  }
}
