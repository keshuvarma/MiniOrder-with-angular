import { Routes } from '@angular/router';
import { OrderComponentComponent } from './order-component/order-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

export const routes: Routes = [
    {path:'',  component : OrderComponentComponent},
    {path:'item/:orderNo', component :ItemComponentComponent },
    {path:'**',component:NotFoundComponentComponent}
];
