import { Component, OnInit } from '@angular/core';
import { HeaderData, HeaderService } from '../services/header.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  
  private uiData: HeaderData = {
    title: 'Nosotros',
    subtitle: 'Conoce un poco de que trata Mochilando',
    thumbnail:'',
    publicationDate: '',
    author: '',
    description: ''
  }

  constructor(private headerService: HeaderService){

  }
  ngOnInit(){
    this.headerService.uiData.set(this.uiData)
  }
}
