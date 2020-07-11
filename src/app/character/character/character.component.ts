import {Component, OnDestroy, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {ActivatedRoute} from "@angular/router";
import {map, pluck, switchMap, take, takeUntil} from "rxjs/operators";
import {CharacterService} from "../character.service";
import {Subject} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  form: FormGroup;
  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private characterService: CharacterService,
              private fb: FormBuilder) {

    this.initForm();

    this.route.params.pipe(
      pluck('id'),
      map((param: string) => Number(param)),
      switchMap((id: number) => this.characterService.getById(id)),
      takeUntil(this.destroy)
    )
      .subscribe((character: Character) => this.form.patchValue(character));
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  save() {
    if (this.form.valid) {

      this.characterService.update(this.form.getRawValue())
        .pipe(takeUntil(this.destroy))
        .subscribe(() => {
          console.log('Speichern erfolgreich!');
        });

    } else {
      console.error('Form invalid!');
    }
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: null,
      name: [null, Validators.required],
      culture: null
    });
  }

  ngOnInit(): void {
  }

}
