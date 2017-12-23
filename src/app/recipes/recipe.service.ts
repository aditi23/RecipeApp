import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
selectedRecipe = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
    new Recipe(
        'A testing Recipe',
        'This is a recipe',
        'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg',
        [
            new Ingredient('something', 1),
            new Ingredient('somethingTestig', 1)
        ]
    ),
    new Recipe(
        'A testing Recipe 2',
        'This is a recipe 2',
        'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg',
        [
            new Ingredient('something2', 1),
            new Ingredient('somethingTestig2', 1),
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    onAddToShoppingListRecipes(ingredients: Ingredient[]) {
        console.log('add hua');
        this.shoppingListService.addIngredients(ingredients);
    }

    getActiveRecipe(id: number) {
        return this.recipes[id];
    }

}
