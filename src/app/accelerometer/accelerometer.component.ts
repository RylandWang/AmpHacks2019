import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css']
})
export class AccelerometerComponent implements OnInit {
  // absolute acceleration
  xAcc: number = 0
  yAcc: number = 0
  totalAcc: number = 0

  xAccBS = new BehaviorSubject<number>(0);
  yAccBS = new BehaviorSubject<number>(0);
  totalAccBS = new BehaviorSubject<number>(0);

  stopsLeft: number = 3;
  stopsLeftBS = new BehaviorSubject<number>(3);

  consistentDecceleration: number = 0

  constructor() {
  }

  get xAcceleration(){
    return this.xAcc
  }

  get yAcceleration(){
    return this.yAcc
  }
  
  ngOnInit() {
    window.alert("hello")
    this.xAccBS.next(1)
    console.log(this.xAccBS)
    
    console.log('Engage');
    window.addEventListener('devicemotion', motion, false);

    let lastX = 0, lastY = 0, lastZ =0
    let moveCounter = 0;

    let xbs = new BehaviorSubject<number>(0)
    let ybs = new BehaviorSubject<number>(0)
    let totalAccbs = new BehaviorSubject<number>(0)
    let stopsbs = new BehaviorSubject<number>(this.stopsLeftBS.value)
    let consistentDeccelerationbs = new BehaviorSubject<number>(0)

    xbs.subscribe(x=>{
      console.log("subscribe: ", x)
      this.xAccBS.next(x)
    })
    ybs.subscribe(x=>{
      console.log("subscribe: ", x)
      this.yAccBS.next(x)
    })
    totalAccbs.subscribe(x=>{
      console.log("subscribe: ", x)
      this.totalAccBS.next(x)
    })
    stopsbs.subscribe(x=>{
      console.log("subscribe: ", x)
      this.stopsLeftBS.next(x)
    })
    consistentDeccelerationbs.subscribe(x=>{
      console.log("decceleration in a row: ", x)
      this.consistentDecceleration = x
    })

    this.xAccBS.next(lastX)
    console.log("BS updated")
    console.log("lastX: ",lastX)

    function motion(e: DeviceMotionEvent,) {
      let acc = e.acceleration;
      // if (!acc.hasOwnProperty('x')) {
      //   acc = e.accelerationIncludingGravity;
      // }

      console.log(this.xAccBS)
      console.log("x: ", this.xAcc)
      console.log("y: ", this.yAcc)
      xbs.next(acc.x)
      ybs.next(acc.y)
      let totalAcc = acc.x + acc.y
      totalAccbs.next(totalAcc)
      
      // gradual decceleration before eventual stop
      if (totalAccbs.value < 0){
        this.consistentDecceleration += 1
        consistentDeccelerationbs.next(consistentDeccelerationbs.value+1)
      }
      else{
        consistentDeccelerationbs.next(0)
      }

      // eventual stop ie complete zero accleration after gradual decceleration
      if (consistentDeccelerationbs.value >= 50 && Math.abs(totalAccbs.value)<=0.5){
        this.stopsLeft -= 1
        stopsbs.next(stopsbs.value-1)
        consistentDeccelerationbs.next(0)
        console.log("stop detected")
        window.alert("Your stop!!!!")
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

        console.log("delta x: ", deltaX)

        if (deltaX + deltaY + deltaZ > 3) {
          moveCounter++;
        } else {
          moveCounter = Math.max(0, --moveCounter);
        }

        if (moveCounter > 2) {
          console.log('SHAKE!!!');
          moveCounter = 0;
        }

        lastX = acc.x;
        lastY = acc.y;
        lastZ = acc.z;
        console.log("lastX: ",lastX)

      }
    }

  }
  }