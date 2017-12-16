import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') ngName: ElementRef;
  @ViewChild('amountInput') ngAmount: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {}

  onAdd() {
    const ngInput = this.ngName.nativeElement.value;
    const ngAmount = this.ngAmount.nativeElement.value;
    const newIngredient = new Ingredient(ngInput, ngAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
