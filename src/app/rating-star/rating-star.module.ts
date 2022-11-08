import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingModule} from "primeng/rating";

const primengModules = [
  RatingModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primengModules
  ]
})
export class RatingStarModule { }
