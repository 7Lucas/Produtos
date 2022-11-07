import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  

  constructor(private produtoService: ProdutoService) {}

  getProdutos(): void {
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }

  ngOnInit(): void {
  }




}
