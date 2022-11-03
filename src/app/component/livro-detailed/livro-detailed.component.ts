import {Component, Input, OnInit} from '@angular/core';
import {Livro} from "../../Livro";
import {ActivatedRoute} from "@angular/router";
import {Livros} from "../../mock-livro";

@Component({
  selector: 'app-livro-detailed',
  templateUrl: './livro-detailed.component.html',
  styleUrls: ['./livro-detailed.component.css']
})

export class LivroDetailedComponent implements OnInit {

  listaLivros: Livro[] = Livros;


  constructor(private _route: ActivatedRoute) { }

  livro_ISSN!: string;

  ngOnInit(): void {
    this.livro_ISSN = <string>this._route.snapshot.paramMap.get('ISSN')
  }

}
