import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Book } from './book';

const endpoint = 'http://localhost:9999/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { 
  }

  private extractData(res: Response){
    let body =res;
    return body || {};
  }

  getBook(id): Observable<any>{
    return this.httpClient.get(endpoint+'book-detail/'+id).pipe(map(this.extractData));
  }

  getBooks(): Observable<any>{
    return this.httpClient.get(endpoint+'books').pipe(map(this.extractData));
  }

  addBook(book:Book): Observable<any> {
    console.log(book);
    return this.httpClient.post<any>(endpoint+'book-add', JSON.stringify(book), httpOptions).pipe(
      tap((book)=>
        console.log('added')
      ,catchError(this.handleError<any>('addBook')))
    )
  }

  updateBook(id, book): Observable<any> {
    console.log(book);
    return this.httpClient.put(endpoint+'book-edit/'+id, JSON.stringify(book), httpOptions).pipe(
      tap((book)=>
        console.log('updated')
      ,catchError(this.handleError<any>('updateBook')))
    )
  }

  deleteBook(id): Observable<any> {
    return this.httpClient.delete<any>(endpoint+'book-detail/'+id, httpOptions).pipe(
      tap((book)=>
        console.log('deleted')
      ,catchError(this.handleError<any>('deleteBook')))
    )
  }

  private handleError<T> (operation = 'operations', result?: T){
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
