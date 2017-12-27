import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  saveData() {
    this.dataStorageService.saveData().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  fetchRecipes() {
    this.dataStorageService.fetchRecipes();
  }
}
