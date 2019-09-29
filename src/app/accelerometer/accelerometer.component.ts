import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-accelerometer',
  templateUrl: './accelerometer.component.html',
  styleUrls: ['./accelerometer.component.css']
})
export class AccelerometerComponent implements OnInit {

  xAcceleration = new BehaviorSubject<number>(0); //acceleration on x-axis
  yAcceleration = new BehaviorSubject<number>(0);  //acceleration on y-axis
  totalAccBS = new BehaviorSubject<number>(0); //aggreagate acceleration

  velocity = new BehaviorSubject<number>(0); 
  distance = new BehaviorSubject<number>(0)

  stopsLeft: number = 3;
  stopsLeftBS = new BehaviorSubject<number>(3);

  consistentDecceleration: number = 0

  timeElapsed = new BehaviorSubject<number>(0);

  constructor() {
  }
  
  ngOnInit() {
    var start = new Date().getTime()
    
    console.log('Engage');
    window.addEventListener('devicemotion', motion, false);

    let lastX = 0, lastY = 0, lastZ =0
    let ERROR_MARGIN = 0.15;

    let xbs = new BehaviorSubject<number>(0)
    let ybs = new BehaviorSubject<number>(0)
    let totalAccbs = new BehaviorSubject<number>(0)
    let stopsbs = new BehaviorSubject<number>(this.stopsLeftBS.value)
    let consistentDeccelerationbs = new BehaviorSubject<number>(0)

    //v = v0 + at
    let velocity = new BehaviorSubject<number>(0);
    //v0
    let prevVelocity = 0
    let distance = new BehaviorSubject<number>(0);

    let timeElapsed = new BehaviorSubject<number>(0);
    let prevTime = 0
    let deltaTime = 0

    xbs.subscribe(x=>{
      console.log("x-axis: ", x)
      this.xAcceleration.next(x)
    })
    ybs.subscribe(x=>{
      console.log("y-axis: ", x)
      this.yAcceleration.next(x)
    })
    totalAccbs.subscribe(x=>{
      console.log("total: ", x)
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
    timeElapsed.subscribe(x=>{
      this.timeElapsed.next(x)
    })
    velocity.subscribe(x=>{
      this.velocity.next(x)
    })
    distance.subscribe(x=>{
      this.distance.next(x)
    })

    function motion(e: DeviceMotionEvent,) {

      let acc = e.acceleration;
      // if (!acc.hasOwnProperty('x')) {
      //   acc = e.accelerationIncludingGravity;
      // }
      var elapsed = (new Date().getTime() - start)/1000;
      prevTime = timeElapsed.value
      deltaTime = elapsed - prevTime
      timeElapsed.next(elapsed)

      let accx = acc.x
      let accy = acc.y
      // calibrate for stationary device
      // reset within margin of error
      if (Math.abs(accx) < ERROR_MARGIN){
        accx = 0
      }
      if (Math.abs(accy) < ERROR_MARGIN){
        accy = 0
      }
      accx = Math.round(accx * 10000) / 10000
      accy = Math.round(accy * 10000) / 10000

      xbs.next(accx)
      ybs.next(accy)
      let totalAcc = Math.round((accx + accy)*10000)/10000
      totalAccbs.next(totalAcc)
      console.log(totalAcc)

      prevVelocity = velocity.value
      velocity.next(prevVelocity + totalAcc*deltaTime)
      distance.next(distance.value + velocity.value*deltaTime)
      
      // gradual decceleration before eventual stop
      if (totalAccbs.value < 0){
        this.consistentDecceleration += 1
        consistentDeccelerationbs.next(consistentDeccelerationbs.value+1)
      }
      else{
        consistentDeccelerationbs.next(0)
      }

      // eventual stop ie complete zero accleration after gradual decceleration
      if (consistentDeccelerationbs.value >= 39 && Math.abs(totalAccbs.value)<= ERROR_MARGIN+9){
        this.stopsLeft -= 1
        stopsbs.next(stopsbs.value-1)
        consistentDeccelerationbs.next(0)
        console.log("stop detected")
        if (stopsbs.value <= 0){
          window.alert("You have arrived at your stop")
          stopsbs.next(3)
          timeElapsed.next(0)
        }
      }

      // if (!acc.x) return;
      //only log if x,y,z > 1
      if (Math.abs(acc.x) >= 1 &&
        Math.abs(acc.y) >= 1 &&
        Math.abs(acc.z) >= 1) {

        if (!lastX) {
          lastX = acc.x;
          lastY = acc.y;
          lastZ = acc.z;
          return;
        }

        let deltaX = Math.abs(acc.x - lastX);
        let deltaY = Math.abs(acc.y - lastY);
        let deltaZ = Math.abs(acc.z - lastZ);
        console.log("deltax: ", deltaX)
        console.log("deltay: ", deltaY)

      }
    }

  }
  }