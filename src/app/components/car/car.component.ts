import { Component } from '@angular/core';
import { CarApiService } from '../../services/car-api.service';
import { CarlistComponent } from '../carlist/carlist.component';
@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  constructor(private _carAPIService: CarApiService) { }
  deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
  }

}
