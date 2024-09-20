import { Injectable } from '@angular/core';


export interface Tarea{
  nombre: string,
  creada: Date,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tasks: Tarea[] = [
    {nombre: 'examen', creada: new Date(), id: 1 },
    {nombre: 'codeChallenge', creada: new Date(), id: 2}

  ]


  constructor() { }

  getTask()  {
    return this.tasks
  }

  getTaskId(id: number) {
    return this.tasks.find(tarea => tarea.id === id)
  }


}
