import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDNrAC40QOS5Whi4ylr9qsH-njzhjpFyag',
      authDomain: 'fir-bruvaa.firebaseapp.com',
      databaseURL: 'https://fir-bruvaa.firebaseio.com',
      projectId: 'fir-bruvaa',
      storageBucket: 'fir-bruvaa.appspot.com',
      messagingSenderId: '544298095766',
      appId: '1:544298095766:web:bbe5476a723d5b037a9eb7',
      measurementId: 'G-Q19H41ZQMH'
    }),
    CoreRoutingModule
  ],
  exports: [RouterModule]
})
export class CoreModule { }
