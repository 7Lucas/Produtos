import { Component, OnInit} from '@angular/core';
import { Produto } from 'src/app/produto';
import { ProdutoService } from 'src/app/produto.service';
//import { PRODUTOS } from 'src/app/mock-produtos'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //@Input() produto?: Produto;

  produtos: Produto[] = [];
  selectedProduto ?: Produto;

  constructor(private produtoService: ProdutoService) {}

  getProdutos(): void {
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }

  ngOnInit(): void {
    this.getProdutos();
  }

  onSelect(produto: Produto): void{
    this.selectedProduto = produto;
  }

}
