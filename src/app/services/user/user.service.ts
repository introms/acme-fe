import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/model/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usrsUrl: string = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<User[]> {
    return this.http.get(this.usrsUrl).pipe(map(r => <User[]>r));
  }

  private delay(millis) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, millis);
    });
  }
  public async getAllAsync(): Promise<User[]> {
    // await this.delay(5000);
    return this.getAll().toPromise<User[]>();
  }

  public updateOne(user: User): Promise<User> {
    const updateUrl = `${this.usrsUrl}/${user.id}`;
    return this.http.put(updateUrl, user).pipe(map(u => <User>u)).toPromise<User>();
  }
}
