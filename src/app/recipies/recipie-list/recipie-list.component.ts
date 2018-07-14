import { Recipie } from './../recipie.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[]= [
    new Recipie('Test Recipie', 'Test Description','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5abd494fae08b54b610ca122-8bfc3c25.jpg'),
    new Recipie('Test Recipie', 'Test Description','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5abd494fae08b54b610ca122-8bfc3c25.jpg'),
    new Recipie('Test Recipie', 'Test Description','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5abd494fae08b54b610ca122-8bfc3c25.jpg'),
    ];

  constructor() { }

  ngOnInit() {
  }

}
