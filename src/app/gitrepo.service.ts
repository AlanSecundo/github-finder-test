import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Response {
  items: any[];
  total_count: number;
 }

@Injectable({
  providedIn: 'root'
})

export class GitrepoService {

  githubApiUrl = 'https://api.github.com/search';

  constructor(private http: HttpClient) { }

  getRepositories(name, page) {
    return this.http.get<Response>(`${this.githubApiUrl}/repositories?q=${name}&page=${page}&per_page=12`);
  }
}
