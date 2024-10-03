import { Injectable, signal } from '@angular/core';
import { Post } from '../types/post.type';

export type HeaderData = Pick<Post, 'title' | 'subtitle' | 'thumbnail' | 'publicationDate' | 'author' | 'description'>


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

     uiData = signal<HeaderData>({title: '', subtitle: '', thumbnail:'' ,publicationDate: '', author:'', description:''})
}
