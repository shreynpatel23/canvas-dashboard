  import {
      Component,
      OnInit,
      ViewChild,
      ElementRef
  } from '@angular/core';
  import * as Chart from 'chart.js';

  @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {
      ngOnInit() {
          this.getChart1();
          this.getChart2();
      }
      @ViewChild('myCanvas1') canvasRef1: ElementRef;
      @ViewChild('myCanvas2') canvasRef2: ElementRef;
      getChart1(){
        let ctx = this.canvasRef1.nativeElement.getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100`", "101"],
                datasets: [{
                    data: [2, 5, 3, 4, 3, 5, 7, 6, 5, 6, 8],
                    borderColor: [
                        'rgba(135,206,235,1)',
                    ]
                }]
            },
            
        });
        
        let draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line.prototype.draw = function () {
            draw.apply(this, arguments);
            let _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = 'rgba(135,206,235,1)';
                ctx.shadowBlur = 100;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 2;
                ctx.lineJoin = 'miter';
                _stroke.apply(this, arguments);
                ctx.restore();
            }
        };
      }
      getChart2(){
        let ctx = this.canvasRef2.nativeElement.getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100`", "101"],
                datasets: [{
                    data: [2, 5, 3, 4, 3, 5, 7, 6, 5, 6, 8],
                    borderColor: [
                        '#fb6530'
                    ]
                }]
            },
            
        });
        let draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line.prototype.draw = function () {
            draw.apply(this, arguments);
            let _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = '#fb6530';
                ctx.shadowBlur = 100;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 2;
                ctx.lineJoin = 'miter';
                _stroke.apply(this, arguments);
                ctx.restore();
            }
        };
      }
  }