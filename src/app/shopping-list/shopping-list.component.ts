import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 15),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngrientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
