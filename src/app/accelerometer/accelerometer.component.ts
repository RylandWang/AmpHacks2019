import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css']
})
export class AccelerometerComponent implements OnInit {
  x: number = 0
  y: number = 0
  xObservable: Subject<number> = new Subject<number>();
  isGyro: boolean = true;
  constructor() {
  }

  get xAcceleration(){
    return this.x
  }

  get yAcceleration(){
    return this.y
  }
  
  ngOnInit() {
    console.log('Engage');
    window.addEventListener('devicemotion', motion, false);

    function motion(e) {
      let acc = e.acceleration;
      if (!acc.hasOwnProperty('x')) {
        acc = e.accelerationIncludingGravity;
      }

      this.x = acc.x
      this.y = acc.y
      }

      console.log(this.x)
      console.log(this.y)
    }

  }
