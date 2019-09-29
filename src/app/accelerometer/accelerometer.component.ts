import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css']
})
export class AccelerometerComponent implements OnInit {
  // absolute acceleration
  xAccBS = new BehaviorSubject<number>(0); // x-axis acceleration
  yAccBS = new BehaviorSubject<number>(0); // y-axis acceleration
  totalAccBS = new BehaviorSubject<number>(0); // aggregate acceleration

  stopsLeft: number = 3; //TODO: integrate with Google Map API to autmatically determine
  stopsLeftBS = new BehaviorSubject<number>(3);

  consistentDecceleration: number = 0

  constructor() {
  }

  ngOnInit() {
    window.navigator.vibrate(200);
    console.log('Engage');
    this.motionDetect();

  }

  motionDetect() {
    window.addEventListener('devicemotion', motion, false);

    let lastX = 0, lastY = 0, lastZ = 0
    let moveCounter = 0;

    let xbs = new BehaviorSubject<number>(0)
    let ybs = new BehaviorSubject<number>(0)
    let totalAccbs = new BehaviorSubject<number>(0)
    let stopsbs = new BehaviorSubject<number>(this.stopsLeftBS.value)
    let consistentDeccelerationbs = new BehaviorSubject<number>(0)

    // update behaviour subjects
    xbs.subscribe(x => {
      console.log("subscribe: ", x)
      this.xAccBS.next(x)
    })
    ybs.subscribe(x => {
      console.log("subscribe: ", x)
      this.yAccBS.next(x)
    })
    totalAccbs.subscribe(x => {
      console.log("subscribe: ", x)
      this.totalAccBS.next(x)
    })
    stopsbs.subscribe(x => {
      console.log("subscribe: ", x)
      this.stopsLeftBS.next(x)
    })
    consistentDeccelerationbs.subscribe(x => {
      console.log("decceleration in a row: ", x)
      this.consistentDecceleration = x
    })

    this.xAccBS.next(lastX)
    console.log("BS updated")
    console.log("lastX: ", lastX)

    /** Acceleration algorithm */
    function motion(e: DeviceMotionEvent, ) {
      let acc = e.acceleration;
      // if (!acc.hasOwnProperty('x')) {
      //   acc = e.accelerationIncludingGravity;
      // }

      // get x, y and aggregate acceleration
      let accX = acc.x
      let accY = acc.y
      // calibrate for stationary device
      if (Math.abs(acc.x) <= 0.16){
        accX = 0
      }
      if (Math.abs(acc.y) <= 0.16){
        accY = 0
      }
      xbs.next(Math.round(accX * 10000) / 10000)
      ybs.next(Math.round(accY * 10000) / 10000)
      let totalAcc = Math.round((acc.x + acc.y) * 10000) / 10000
      totalAccbs.next(totalAcc)

      // gradual decceleration before eventual stop
      if (totalAccbs.value < 0) {
        this.consistentDecceleration += 1
        consistentDeccelerationbs.next(consistentDeccelerationbs.value + 1)
      }
      else {
        consistentDeccelerationbs.next(0)
      }

      // eventual stop ie complete zero accleration after gradual decceleration
      if (consistentDeccelerationbs.value >= 52 && Math.abs(totalAccbs.value) == 0) {
        stopsbs.next(stopsbs.value - 1)
        consistentDeccelerationbs.next(0)
        console.log("stop detected")
        if (stopsbs.value == 0) {
          window.alert("You have arrived at your stop.")
          window.navigator.vibrate(0);
        }
      }
      // if (!acc.x) return;

      //only log if x,y,z > 1
      if (Math.abs(acc.x) >= 1 &&
        Math.abs(acc.y) >= 1 &&
        Math.abs(acc.z) >= 1) {
        //console.log('motion', acc);
        if (!lastX) {
          lastX = acc.x;
          lastY = acc.y;
          lastZ = acc.z;
          return;
        }

        let deltaX = Math.abs(acc.x - lastX);
        let deltaY = Math.abs(acc.y - lastY);
        let deltaZ = Math.abs(acc.z - lastZ);

        if (deltaX + deltaY + deltaZ > 3) {
          moveCounter++;
        } else {
          moveCounter = Math.max(0, --moveCounter);
        }
         
        }

      }
    }

  }


