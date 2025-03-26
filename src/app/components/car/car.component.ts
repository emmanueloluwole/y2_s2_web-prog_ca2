import { Component, input } from '@angular/core';
import { CarApiService } from '../../services/car-api.service';
import { CarlistComponent } from '../carlist/carlist.component';
import { Icar } from '../../interfaces/car';
import { Input } from '@angular/core';
@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() carData?:Icar;
  carImageWidth?:number | 300;
  constructor(private _carAPIService: CarApiService) { }
  deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
  }

}
