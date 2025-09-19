import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-component',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './order-component.component.html',
  styleUrl: './order-component.component.less'
})
export class OrderComponentComponent {

  items=[{orderNo:1456},{orderNo:9998}];

}
