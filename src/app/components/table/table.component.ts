import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Empleados, Empleado } from '../../catalogoService.service';
import { Subscription } from 'rxjs';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
let aa:{}[] = [
  {id: 1, nombre: 'Hydrogen', edad: 1.0079, cargo: 'H', acciones:'100', peo:10, si:100},
  {id: 1, nombre: 'Hydrogen', edad: 1.0079, cargo: 'H', acciones:'10'},
];
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent 
{
  dataSource:Empleado[] = [];
  subs:Subscription = new Subscription();
  constructor(private empleados:Empleados){}
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'cargo', 'acciones'];
  emp:Empleado[] = this.empleados.empleado;
  ngOnInit()
  {
    this.subs = this.empleados.obs.subscribe(
      () => {this.actualizarDS()}
      );
  }
  actualizarDS()
  {
    console.log("p");
    
    this.dataSource = this.empleados.empleado;
    console.log(this.dataSource);
  } 
}
