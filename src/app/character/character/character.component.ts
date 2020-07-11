import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {ActivatedRoute} from "@angular/router";
import {map, pluck} from "rxjs/operators";

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: Character[] = [
    {id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    {id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  character: Character;

  constructor(private route: ActivatedRoute) {
    this.route.params.pipe(
      pluck('id'),
      map((param: string) => Number(param))
    )
      .subscribe(id => {
        this.character = this.characters.find(char => char.id === id);
      });
  }

  ngOnInit(): void {
  }

}
