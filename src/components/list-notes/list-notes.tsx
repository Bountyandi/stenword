import { Component, Prop } from '@stencil/core';

export interface NoteProps {
  name: string;
  body: string;
  date: Date;
  section: string;
  tags: string[];
}

@Component({
  tag: 'list-notes',
  styleUrl: 'list-notes.css'
})
export class ListNotes {

  @Prop() notes: NoteProps[];

  render() {
    return (
      <div>
        {this.notes.map(item => <div>
          {item.name} - {item.body} - {item.section}
          </div>) }
      </div>
    )
  }

}


