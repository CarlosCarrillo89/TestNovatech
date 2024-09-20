import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarea, TareasService } from '../tareas.service';

@Component({
  selector: 'app-detallestareas',
  templateUrl: './detallestareas.component.html',
  styleUrls: ['./detallestareas.component.css']
})
export class DetallestareasComponent implements OnInit{

  tarea: Tarea | undefined

  constructor(private router: ActivatedRoute, private service: TareasService) {

  }

  ngOnInit(): void {
      const idTarea = Number(this.router.snapshot.paramMap.get('id'))
      this.tarea = this.service.getTaskId(idTarea)
  }
  

}
