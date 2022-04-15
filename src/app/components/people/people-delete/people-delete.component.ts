import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from '../people.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.css']
})
export class PeopleDeleteComponent implements OnInit {

  people: People = {
    name: '',
    dtnasc: '',
    img: ''
  }

  constructor(private peopleService : PeopleService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.peopleService.readById(id).subscribe(people => {
    this.people = people 
    })
  }

  deletePeople(): void {
    this.peopleService.delete(`${this.people.id}`).subscribe(() => {
      this.peopleService.showMessage('Cadastro removido com êxito!')
      this.router.navigate(['/people'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/people'])
  }
}
