import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap-model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {
  faceSnaps : FaceSnap[] =  [
    {
      title: 'Archibaddsdld',
      description: 'Mon meilleur ami depuis tout petit !',
      imagesUrls: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 145,
      location:"Paris"
    },
     {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imagesUrls: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 1,
      location:"Thies"
    },
    {
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imagesUrls: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 1
    }
  ];
}

