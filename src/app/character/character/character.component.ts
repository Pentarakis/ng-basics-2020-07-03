import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {ActivatedRoute} from "@angular/router";
import {map, pluck, switchMap} from "rxjs/operators";
import {CharacterService} from "../character.service";

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

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    this.route.params.pipe(
      pluck('id'),
      map((param: string) => Number(param)),
      switchMap((id: number) => this.characterService.getById(id))
    )
      .subscribe((character: Character) => this.character = character);
  }

  ngOnInit(): void {
  }

}
