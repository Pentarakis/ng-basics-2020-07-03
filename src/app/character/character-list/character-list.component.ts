import { Component, OnInit } from '@angular/core';
import {Character} from "../model/character";
import {ActivatedRoute} from "@angular/router";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'ngb-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [
    { id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    { id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
