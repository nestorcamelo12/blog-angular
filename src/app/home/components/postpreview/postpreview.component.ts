import { Component, Input } from '@angular/core';
import { PostPreview } from '../../../types/post-preview.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-postpreview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './postpreview.component.html',
  styleUrl: './postpreview.component.css'
})
export class PostpreviewComponent {
  @Input() post: PostPreview = {
    
    title: '',
    subtitle: '',
    slug: '',
    author: '',
    thumbnail:'',
    publicationDate:'',
    description: ''
  }
}
