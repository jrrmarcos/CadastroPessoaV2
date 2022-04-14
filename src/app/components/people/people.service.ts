import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = 'http://localhost:3001/pessoa'

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  tratamentodeErros(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  create(people: People): Observable<People> {
    return this.http.post<People>(this.baseUrl, people).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }

  read(): Observable<People[]> {
    return this.http.get<People[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }

  readById(id: string): Observable<People> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<People>(url).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }

  update(people: People): Observable<People> {
    const url = `${this.baseUrl}/${people.id}`
    return this.http.put<People>(url, people).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }

  delete(id: string): Observable<People> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<People>(url).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }
}
