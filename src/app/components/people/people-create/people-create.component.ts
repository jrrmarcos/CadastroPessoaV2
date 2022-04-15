import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { People } from '../people.model';
import { DatePipe } from '@angular/common';

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

  constructor(private peopleService: PeopleService,
    private router: Router,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  createPeople(): void {

    const dataUser = this.people.dtnasc
    const dtUserPipe = this.datepipe.transform(dataUser, 'yyyyMMdd')

    const dtAtual = new Date()
    const dtAtualPipe = this.datepipe.transform(dtAtual, 'yyyyMMdd')

    if (dtUserPipe  >= dtAtualPipe) {
      this.peopleService.dataInvalida(true)
    } else {

      this.peopleService.create(this.people).subscribe(() => {
        this.peopleService.showMessage('Pessoa Cadastrada!')
        this.router.navigate(['/people']) //Navegando para página inicial de pessoas após cadastras
      }
      )
    }

  }

  cancelar(): void {
    this.router.navigate(['/people'])
  }

}
