import { City } from './../../../../models/city';
import { Place } from './../../../../models/place';
import * as fromRoot from './../../../../reducers/index';
import { Store } from '@ngrx/store';
import { Trip } from './../../../../models/trip';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-trip-activity',
  templateUrl: './trip-activity.component.html',
  styleUrls: ['./trip-activity.component.css']
})
export class TripActivityComponent implements OnInit {
  selectedTrip$: Observable<Trip>;
  selectedCity$: Observable<City>;
  cities$: Observable<City[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.selectedTrip$ = this.store.select(fromRoot.getSelectedTrip);
    this.cities$ = this.store.select(fromRoot.getCitiesFromTrip);
    this.selectedCity$ = this.store.select(fromRoot.getSelectedCity);
  }
  
  ngOnInit() {
  }
}