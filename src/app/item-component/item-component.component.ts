import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-component.component.html',
  styleUrl: './item-component.component.less'
})
export class ItemComponentComponent {

  orderNo!:number;
  orderItems: string[] = [];
  constructor(private router: Router, private activatedRoute:ActivatedRoute){
  }
  
  ngOnInit(){
    var a=this.activatedRoute.snapshot.paramMap.get('orderNo');
    this.orderNo = a ? +a : 0; 
     this.orderItems = this.orders[this.orderNo] || [];

  }
  home(){
    console.log("Navigating to home");
    this.router.navigate(['/']);
  }

  private orders: { [key: number]: string[] } = {
    1456: ['Banana'],
    9998: ['Ice Cream *3']
  };
}
