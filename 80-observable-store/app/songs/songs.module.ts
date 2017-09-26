import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListedComponent } from './components/songs-listed/songs-listed.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';

import { SongsService } from '../songs/services/songs.service';

@NgModule({
  // core modules
  imports: [
    CommonModule,
    HttpModule
  ],
  // components
  declarations: [
    SongsFavouritesComponent,
    SongsListedComponent,
    SongsPlaylistComponent
  ],
  // services
  providers: [SongsService],
  // to use globally
  exports: [
    SongsFavouritesComponent,
    SongsListedComponent,
    SongsPlaylistComponent
  ]
})
export class SongsModule {}
