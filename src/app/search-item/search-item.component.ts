import { Component, OnInit, Input } from '@angular/core';
import { StarWarsPeopleService } from '../services/star-wars-people.service';
import { People } from '../models/people';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';
import { HttpClient } from 'selenium-webdriver/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private peopleService: StarWarsPeopleService,
    private SWApi: 'https://swapi.co/api',
    ) { }

    search(dataType, term){
      getItem(): Observable{
        return this.http.get(`${this.SWApi}/${dataType}/?search=${term}`)
      }
  }

  ngOnInit(){

  }
  
}
