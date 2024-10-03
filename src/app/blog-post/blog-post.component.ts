import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import matter from 'gray-matter-browser';
import MarkdownIt from 'markdown-it';
import { HeaderData, HeaderService } from '../services/header.service';
import { RecentpostsComponent } from "../recentposts/recentposts.component";

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule, RecentpostsComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit {
   private markdownIt = new MarkdownIt();
   content = '';
  constructor(private activateRouter: ActivatedRoute, private http: HttpClient,
    public headerService: HeaderService
  ){
  }
  ngOnInit(): void {
    //slug toma el valor de la url
  const slug =  this.activateRouter.snapshot.paramMap.get('postId')

    //Hacer peticiones http de forma dinamica, esto nos devuelve un observable por lo que tenemos que suscribirnos
    //para obtener la informacion de ese observable. 
    this.http.get(`assets/posts/${slug}/post.md`, { responseType: 'text' }).subscribe({
      //Le pasamos un objeto con dos metodos, con este metodo vamos a recibir cual fue la data que obtuvo
      //con la peticion.
      next: data => this.manageMarkdonwFileData(data), //la libreria Markdonw combierte la data en contenido HTML
      //Metodo error en caso de que la llamada http falle
      error: error => {
        console.error(error);
        if (error?.status === 404) {
         // this.router.navigate(['/'])
        }
      }
    })

  }

  manageMarkdonwFileData(markDownFile: string | undefined): void {
    //si no viene ningun archivo markDownFile finaliza la funcion 
    if (!markDownFile) {
      return
    };
   
    const matterObj = matter(markDownFile); //la libreria matter nos va a dar un objeto con dos claves, data y content
    const { title = '', subtitle = '', thumbnail = '', publicationDate = '', author = '',description='' } = matterObj.data; //en data se va a almacenar toda la metaData del Post
    const headerData: HeaderData = { title, subtitle, thumbnail, publicationDate, author, description};
    this.setHeaderData(headerData)//se encargara de actualizar nuestro header
    this.content = this.markdownIt.render(matterObj.content);//en content se va a almacenar el contenido que quermos convertir en HTML
  }

  setHeaderData(headerData: HeaderData): void {
    this.headerService.uiData.set(headerData)
  }

}
