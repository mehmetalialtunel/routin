import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Route } from "../model/route.model";
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';

@Injectable()
export class RouteService {

    private routeListRef = this.db.list<Route>('route');
    private routeRef = this.db.database.ref('route');

    constructor(public db : AngularFireDatabase, private auth : AuthService){

    }

    addRoute(route: Route) {
        return this.routeListRef.push(route);
    }

    listMyRoutes(uid :string){

        return this.routeListRef.valueChanges();
        //debugger;
        //return this.routeRef.equalTo(uid, "owner").once('value').then(snapshot => snapshot.val())
        //.then((data) => {
        //    debugger;
        
        //})
    }
   
}