import { Pensamento } from './../pensamento';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listarPensamentos: Pensamento[] = [ ];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listarPensamentos = listaPensamentos
    })
  }

}
