import { Component, OnInit } from '@angular/core';
import { TareasService, Tarea } from '../tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  listaTareas: Tarea[] = []

  constructor(private service: TareasService, private router: Router) {

  }

  ngOnInit(): void {
      this.listaTareas = this.service.getTask()
  }

  verTarea(id: number) {
    this.router.navigate(['/tareas', id]);
  }

}
