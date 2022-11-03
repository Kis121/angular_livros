import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Livro} from "../../Livro";
import {Livros} from "../../mock-livro";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaLivros: Livro[] = Livros;
  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  onClick(ISSN_livro: any){
    this._route.navigate(['/livro', ISSN_livro])
  }

}
