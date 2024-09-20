import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TareasService } from './tareas.service';
import { DetallestareasComponent } from './detallestareas/detallestareas.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';

const routes: Routes = [
{
  path: '',
  component: ListaTareasComponent
},
{
  path: 'tareas', 
  component: ListaTareasComponent
},
{
  path: 'tareas/:id',
  component: DetallestareasComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
