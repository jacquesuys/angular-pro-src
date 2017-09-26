import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { SongsService } from '../../services/songs.service';

import { Store } from '../../../store';

@Component({
  selector: 'songs-listed',
  template: `
    <div>
      <div *ngFor="let item of listed$ | async">
        {{ item.artist }}
        {{ item.track }}
      </div>
    </div>
  `
})
export class SongsListedComponent implements OnInit, OnDestroy {

  listed$: Observable<any[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.listed$ = this.store.select('playlist')
    .filter(Boolean)
    .map(playlist => playlist.filter(track => track.listened));
  }

  ngOnDestroy() {

  }
}
