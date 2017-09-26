import { Component } from '@angular/core';

import { Store } from './store';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <songs-playlist></songs-playlist>
      <songs-listed></songs-listed>
      <songs-favourites></songs-favourites>
    </div>
  `
})
export class AppComponent {

  todos$ = this.store.select<any[]>('todos');

  constructor(
    private store: Store
  ) {
    this.store.set('todos', [{ id: 1, name: 'Eat dinner' }, { id: 2, name: 'Do washing' }]);
  }

}
