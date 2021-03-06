import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable, of } from 'rxjs';  
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = 'http://localhost:8080/';  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private connectedUser :User;
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
  console.log(`usereService: ${message}`);
}
  constructor(private http:HttpClient) { }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}`+'addUser', user ,this.httpOptions).pipe(
    
      catchError(this.handleError<User>('addUser'))
    );  
  }
  checkUser(user:User):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}`+'checkUser' ,this.httpOptions);

}
setConnectedUser( user :User){
this.connectedUser =user;

}
getConnectedUser():User{
  return this.connectedUser;
}
}
