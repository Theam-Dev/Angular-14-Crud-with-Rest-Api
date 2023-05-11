import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "src/app/models/post";
import { ConnectionService } from "src/app/service/connection.service";

@Injectable({
  providedIn: "root",
})
export class PostApi {
    constructor(private http: HttpClient,private cn:ConnectionService) {}
    read(): Observable<Post[]> {
    return this.http.get<Post[]>(this.cn.baseUrl+"post").pipe(
      map((obj) => obj)
    );
  }
  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.cn.baseUrl+"post/store", post).pipe(
      map((obj) => obj),
    );
  }
  edit(id: number): Observable<Post> {
    return this.http.get<Post>(this.cn.baseUrl+"post/edit/"+id).pipe(
      map((obj) => obj),
    );
  }
  update(post: Post): Observable<Post> {
    return this.http.post<Post>(this.cn.baseUrl+"post/update/"+post.id,post).pipe(
      map((obj) => obj),
    );
  }
  delete(id: number): Observable<Post> {
    return this.http.get<Post>(this.cn.baseUrl+"post/delete/"+id,).pipe(
      map((obj) => obj),
    );
  }
}