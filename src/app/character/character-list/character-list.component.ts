import { Component, OnInit } from '@angular/core';
import {Character} from "../model/character";
import {ActivatedRoute} from "@angular/router";
import {Observable, pipe} from "rxjs";
import {map} from "rxjs/operators";
import {CharacterService} from "../character.service";

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters$: Observable<Character[]>;

  constructor(private characterService: CharacterService) {
    this.characters$ = this.characterService.getAll();
  }

  ngOnInit(): void {
  }

}
