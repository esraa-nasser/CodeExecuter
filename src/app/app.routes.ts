import { Routes } from '@angular/router';
import { GetAllCodesComponent } from './Code/get-all-codes/get-all-codes.component';
import { CreateCodeComponent} from './Code/create-code/create-code-component';

export const routes: Routes = [
    { path: 'codes', component: GetAllCodesComponent },
    { path: 'create', component: CreateCodeComponent },

];
