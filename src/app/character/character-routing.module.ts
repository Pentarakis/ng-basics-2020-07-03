import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CharacterListComponent} from "./character-list/character-list.component";
import {CharacterComponent} from "./character/character.component";

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: ':id',
    component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
