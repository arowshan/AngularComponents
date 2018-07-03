import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

export const appRoutes = [
    { path: 'demo', component: DemoComponent  }
]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}