import { Component } from '@stencil/core';
import { NoteProps } from '../list-notes/list-notes';

const data: NoteProps[] = [
  {
    name: 'Pizza',
    body: 'Pizza - it is a food',
    date: new Date('09.03.2018'),
    section: 'Food',
    tags: [ 'food' ],
  },
  {
    name: 'cc',
    body: 'CC - carbon copy',
    date: new Date('09.02.2018'),
    section: 'Mailing',
    tags: [ 'mail', 'email' ],
  },
  {
    name: 'Rostov',
    body: 'Rostov - city',
    date: new Date('09.01.2018'),
    section: 'Geography',
    tags: [ 'city' ],
  }
];


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  renderHeader() {
    return(
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>
    );
  }

  render() {
    return [
      this.renderHeader()
      ,
      <ion-content padding>
        <add-note-form addNote={(note: NoteProps) => { console.log(note) }} />
        <list-notes notes={data} />

      </ion-content>
    ];
  }
}
