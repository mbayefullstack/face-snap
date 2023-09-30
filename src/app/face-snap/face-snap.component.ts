import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnaps!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  buttonText!: string;
  imagesUrls!: string;


  ngOnInit() {
    this.title = "Archibbbbald";
    this.description = "Mon meilleur ami depuis tout petit !";
    this.createdDate = new Date();
    this.snaps = 1;
    this.buttonText = "Oh Snaps";
    this.imagesUrls ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png"
  }

  onSnap()
  {
    if (this.buttonText === 'Oh Snapps') {
      this.faceSnaps.snaps++;
      this.buttonText = 'Oupss UnSnapps'
    } else{
      this.buttonText = 'Oh Snapps';
      this.faceSnaps.snaps--;

    }
  }


}
