import { Component, Input } from '@angular/core';
import { Product } from '../products';

export class ProductAlertsComponent {
  @Input() product!: Product;
}
