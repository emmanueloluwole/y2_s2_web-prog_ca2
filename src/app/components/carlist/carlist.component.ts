import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarApiService } from '../../services/car-api.service';
import { Icar } from '../../interfaces/car';
import { NewCar } from '../../interfaces/car';
import { CarComponent } from '../car/car.component';


@Component({
  selector: 'app-carlist',
  imports: [CommonModule, CarComponent],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {
 
  carsData:any;
  show: boolean = false

  constructor(private _carAPIService: CarApiService) { }


  ngOnInit() {
    this.getCars()
  }
  refreshCars(){
    this.getCars();
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:Icar;
    addCar=new NewCar(make,model,year,imageUrl);
    this._carAPIService.addCarDetails(addCar).subscribe(carsData =>
      { this.carsData = carsData  
         this.getCars() }

    );

   

   
   

    return false;
  }

}
