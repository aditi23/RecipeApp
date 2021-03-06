import { AuthService } from './../../auth/auth.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router,
          private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getActiveRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.onAddToShoppingListRecipes(this.recipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete() {
    this.recipeService.onDelete(this.id);
    this.router.navigate(['/recipes']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
