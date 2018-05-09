import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const appRoutes:Route[] = [
    {
        path:'',
        component:AppComponent
    }
]


export const appRouting:RouterModule = RouterModule.forRoot(appRoutes);