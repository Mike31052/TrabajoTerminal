import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {
  messageLines: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    private dialogRef: MatDialogRef<InfoDialogComponent>
  ) {}

  ngOnInit(): void {
    // Divide el mensaje en líneas usando el carácter de salto de línea
    this.messageLines = this.data.message.split('\n');
  }

  close(): void {
    this.dialogRef.close();
  }
}
