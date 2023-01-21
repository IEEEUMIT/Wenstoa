import { Component, OnInit } from '@angular/core';
import { timeline } from 'src/app/JSONdata/timeline';


@Component({

  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit{
  timelinedel:any;    
  ngOnInit(): void {
        this.timelinedel=timeline
      }
}


// paint dripping

// let points;
// let stepsPerFrame;

// function setup() {
// stepsPerFrame = 5;
// createCanvas(windowWidth, windowHeight);
// noFill();
// strokeWeight(3);
// reset();
// }

// function draw() {
//   for (let i = 0; i < stepsPerFrame; i++) {
//   stroke(0, 255 – i * 255 / stepsPerFrame);
//   drawLine();
//   }
//   }

//   function reset() {
//     background("white");
//     resetPoints();
//     }
    
//     function resetPoints() {
//     points = [];
//     for (let i = 0; i < windowWidth; i++) {
//     points.push([i, 0]);
//     }
//     }

//     function drawLine() {
//       beginShape();
//       let atLeastOneOnScreen = false;
//       points.forEach(p => {
//       vertex(p[0], p[1]);
//       p[1] += noise(frameCount / 100 + p[0] / 25);
//       if (p[1] < windowHeight * 1.1) {
//       atLeastOneOnScreen = true;
//       }
//       });
//       endShape();
      
//       if (!atLeastOneOnScreen) {
//       reset();
//       }
//       }
      
//       function windowResized() {
//       resizeCanvas(windowWidth, windowHeight);
//       }



//babbel(js compiler)

// let points;
// let stepsPerFrame;

// function setup() {
//   stepsPerFrame = 5;
//   createCanvas(windowWidth, windowHeight);
//   noFill();
//   strokeWeight(3);
//   reset();
// }

// function draw() {
//   for (let i = 0; i < stepsPerFrame; i++) {
//     stroke(0, 255 - i * 255 / stepsPerFrame);
//     drawLine();
//   }
// }

// function reset() {
//   background("white");
//   resetPoints();
// }

// function resetPoints() {
//   points = [];
//   for (let i = 0; i < windowWidth; i++) {
//     points.push([i, 0]);
//   }
// }

// function drawLine() {
//   beginShape();
//   let atLeastOneOnScreen = false;
//   points.forEach(p => {
//     vertex(p[0], p[1]);
//     p[1] += noise(frameCount / 100 + p[0] / 25);
//     if (p[1] < windowHeight * 1.1) {
//       atLeastOneOnScreen = true;
//     }
//   });
//   endShape();

//   if (!atLeastOneOnScreen) {
//     reset();
//   }
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
