import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNotesComponent } from '../../add-notes/add-notes.component';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent {
  constructor(public dialog: MatDialog) {}

  addnews(): void {
    const dialogRef = this.dialog.open(AddNotesComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
