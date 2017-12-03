import { Recipe } from './../recipe.model';
import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A testing Recipe', 'This is a recipe', 'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg'),
    new Recipe('A testing Recipe 2', 'This is a recipe 2', 'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('recipe' + recipe.name);
    this.recipeWasSelected.emit(recipe);
  }

}
