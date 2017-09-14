import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-beti-firebase-tester',
  templateUrl: './beti-firebase-tester.component.html',
  styleUrls: ['./beti-firebase-tester.component.css']
})
export class BetiFirebaseTesterComponent implements OnInit {
  user$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.user$ = db.list('/users');
  }

  ngOnInit() {
  }

  add() {
    this.user$.push({
      UID: 'XXE001',
      FirstName: 'jabulani',
      UserType: 'undified'
    });
  }

}
