import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  // tiem giong nhu Autowired
  constructor(private productService: ServiceService) { }

  ngOnInit() {
    this.getAll();
  }
getAll() {
    this.products = this.productService.getAll();
}
}
