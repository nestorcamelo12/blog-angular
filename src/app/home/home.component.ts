import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecentpostsComponent } from "../recentposts/recentposts.component";
import { PostpreviewComponent } from "./components/postpreview/postpreview.component";
import { HeaderHomeComponent } from "./components/header-home/header-home.component";
import { PostPreview } from '../types/post-preview.type';
import { Title } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderService } from '../services/header.service';
import { data } from 'jquery';
import { forkJoin } from 'rxjs';
import matter from 'gray-matter-browser';

type HomeData = {
  posts: Array<string>
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RecentpostsComponent, PostpreviewComponent, HeaderHomeComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
   
  posts: Array<PostPreview> = []

  constructor(private headerService: HeaderService, private http: HttpClient){
  }

  ngOnInit() {
    const pathHomeData = 'assets/home/home-data.json'
   
    this.http.get<HomeData>(pathHomeData).subscribe({
      next: data => {
        //Almacenar un array de observables 
        const requests = data.posts.map(slug => this.http.get(`assets/posts/${slug}/post.md`, { responseType: 'text' }))
        forkJoin(requests).subscribe({
          next: allPostDetails => {
            this.posts = allPostDetails.map(markdownFile => {
              const { 
                title = '',
                subtitle = '',
                slug = '',
                author = '',
                publicationDate = '', 
                thumbnail = '',
                description=''} = matter(markdownFile).data;
                return {
                title,
                subtitle,
                slug,
                author,
                publicationDate, 
                thumbnail,
                description
                }
            })
          },
           error: error => console.error(error) 
        })
      },
      error: error => console.error(error) 
    })
  }
  
}
