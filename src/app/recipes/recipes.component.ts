import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
  encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
