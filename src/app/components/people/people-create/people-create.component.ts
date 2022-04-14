import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { People } from '../people.model';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css']
})
export class PeopleCreateComponent implements OnInit {

  people: People = {
    name: '',
    dtnasc: '',
    img: ''
  }

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
  }

  createPeople(): void {
    this.peopleService.create(this.people).subscribe(() => {
      this.peopleService.showMessage('Pessoa Cadastrada!') 
      this.router.navigate(['/people']) //Navegando para página inicial de pessoas após cadastras
    })
    
  }

  cancelar(): void {
    this.router.navigate(['/people'])
  }

}
