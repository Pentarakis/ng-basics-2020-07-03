import {Component, OnDestroy, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {ActivatedRoute} from "@angular/router";
import {map, pluck, switchMap, takeUntil} from "rxjs/operators";
import {CharacterService} from "../character.service";
import {Subject} from "rxjs";

@Component({
  selector: 'ngb-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {

  characters: Character[] = [
    {id: 1, name: 'Daenerys Targaryen', culture: 'Valyrian'},
    {id: 2, name: 'Jon Snow', culture: 'Northmen'}
  ];

  destroy: Subject<boolean> = new Subject<boolean>();

  character: Character;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    this.route.params.pipe(
      pluck('id'),
      map((param: string) => Number(param)),
      switchMap((id: number) => this.characterService.getById(id)),
      takeUntil(this.destroy)
    )
      .subscribe((character: Character) => this.character = character);
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  ngOnInit(): void {
  }

}
