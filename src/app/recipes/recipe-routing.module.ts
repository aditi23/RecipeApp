import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthGuardService } from './../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const recipeRoutes: Routes = [
    {path: '', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]},
        {path: ':id', component: RecipeDetailComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(recipeRoutes)
    ],
    providers: [AuthGuardService],
    exports: [RouterModule]
})
export class RecipeRoutingModule {

}