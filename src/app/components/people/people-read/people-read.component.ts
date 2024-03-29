import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from '../people.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-read',
  templateUrl: './people-read.component.html',
  styleUrls: ['./people-read.component.css']
})
export class PeopleReadComponent implements OnInit {

  peoples: People[]
  displayedColumns = ['id','name','dtnasc', 'action']

  constructor(private peopleService: PeopleService,
            private router: Router) { }

  ngOnInit(): void {
    this.peopleService.read().subscribe(peoples => {
      this.peoples = peoples
    })
  }


}
