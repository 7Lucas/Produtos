import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { PRODUTOS } from './mock-produtos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos(): Observable<Produto[]> {
    const produtos = of(PRODUTOS);
    return produtos;
  }

}
