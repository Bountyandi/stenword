import {Component, Prop} from '@stencil/core';
import {NoteProps} from '../list-notes/list-notes';

@Component({
  tag: 'add-note-form',
  styleUrl: 'add-note-form.css'
})
export class AddNoteForm {

  @Prop() addNote: (note: NoteProps) => void;
  @Prop() name: string;
  @Prop() body: string;
  @Prop() section: string;
  @Prop() tags: string[];

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input type='text' /> <br />
        </label>
        <label>
          Body:
          <textarea /> <br />
        </label>
        <label>
          Section:
          <input type='text' /> <br />
        </label>
        <label>
          Tags:
          <input type='text' /> <br />
        </label>

        <input type="submit" value="Add" />
      </form>
    )
  }
 //https://stenciljs.com/docs/forms/

  private handleSubmit(e) {
    e.preventDefault();
    console.log(this)
    console.log(this.value)
    this.addNote({})
  }

}


