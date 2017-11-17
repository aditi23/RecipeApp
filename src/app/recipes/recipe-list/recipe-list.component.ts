import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A testing Recipe', 'This is a recipe', 'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg'),
    new Recipe('A testing Recipe 2', 'This is a recipe 2', 'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
