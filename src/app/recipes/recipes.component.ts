import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onClick(event: EventEmitter<Recipe>) {
    console.log('event' + event);
    console.log('selectedRecipe' + this.selectedRecipe);
  }

}
