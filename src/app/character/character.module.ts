import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from "@angular/router";
import {CharacterRoutingModule} from "./character-routing.module";



@NgModule({
  declarations: [CharacterComponent, CharacterListComponent],
  exports: [CharacterComponent, CharacterListComponent],
  imports: [
    CommonModule,
    RouterModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
